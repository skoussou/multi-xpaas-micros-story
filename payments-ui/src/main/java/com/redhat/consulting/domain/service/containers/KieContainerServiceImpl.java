package com.redhat.consulting.domain.service.containers;

import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.inject.Inject;

import org.drools.core.command.runtime.rule.GetObjectsCommand;
import org.joda.time.DateTime;
import org.kie.api.KieServices;
import org.kie.api.command.BatchExecutionCommand;
import org.kie.api.command.Command;
import org.kie.api.command.KieCommands;
import org.kie.api.runtime.ExecutionResults;
import org.kie.internal.command.CommandFactory;
import org.kie.server.api.model.KieContainerResource;
import org.kie.server.api.model.KieContainerResourceList;
import org.kie.server.api.model.ServiceResponse;
import org.kie.server.client.KieServicesClient;
import org.kie.server.client.KieServicesConfiguration;
import org.kie.server.client.KieServicesFactory;
import org.kie.server.client.RuleServicesClient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.redhat.consulting.domain.InFact;
import com.redhat.consulting.domain.common.exception.ResourceNotFoundException;
import com.redhat.consulting.domain.model.Approval;
import com.redhat.consulting.domain.model.User;
import com.redhat.consulting.domain.repository.user.UserRepository;

@Service
@Transactional
public class KieContainerServiceImpl implements KieContainerService {

	@Inject
	protected UserRepository userRepository;

	@Inject
	protected PasswordEncoder passwordEncoder;

//	protected String serverUrl = System.getProperty("org.kie.server.url", "http://localhost:8080/kie-server/services/rest/server");
//	protected String user = System.getProperty("org.kie.server.kie.rest.api.user", "stelios");
//	protected String password = System.getProperty("org.kie.server.kie.rest.api.password", "stelios123!");

	protected String serverUrl = System.getProperty("org.kie.server.url", "http://uaex-rules-api-poc.apps.ocp.uaeexchange.com");
	protected String user = System.getProperty("org.kie.server.kie.rest.api.user", "kieserver");
	protected String password = System.getProperty("org.kie.server.kie.rest.api.password", "kieserver123!");
	
	protected String CONTAINER_ID = System.getProperty("org.kie.server.container", "payments");
	//protected String processId = System.getProperty("org.kie.server.itest.process", "evaluation");

	private final String IN_HANDLE = "KIE_IN_HANDLE";
	private final String RESULTS_HANDLE = "resultsList";
	private final String OBJECT_HANDLE = "KIE_OBJECT_HANDLE";

	@Override
	public Page<Approval> executeRules(Double value) {
		ArrayList<Approval> approvals = new ArrayList<Approval>();
		for(String approvalRes : kieRestAPI(value)) {
			approvals.add(new Approval(approvalRes));
		}
		
		Page<Approval> page = new PageImpl<Approval>(approvals);
		return page;
	}

	// TODO PUT RULES KieServiceClient here
	private List<String> kieRestAPI(Double value) {

		KieServicesConfiguration config = KieServicesFactory.newRestConfiguration(serverUrl, user, password);

		KieServicesConfiguration configuration = KieServicesFactory.newRestConfiguration(serverUrl, user, password);
		Set<Class<?>> allClasses = new HashSet<Class<?>>();
		allClasses.add(com.redhat.consulting.domain.InFact.class);
		config.addExtraClasses(allClasses);
		// configuration.setMarshallingFormat(MarshallingFormat.JSON);
		configuration.addJaxbClasses(allClasses);

		KieServicesClient kieServicesClient =  KieServicesFactory.newKieServicesClient(configuration);
		RuleServicesClient ruleClient = kieServicesClient.getServicesClient(RuleServicesClient.class);
		KieCommands commandsFactory = KieServices.Factory.get().getCommands();


		List<Command> cmds = new ArrayList<>();
		cmds.add( CommandFactory.newSetGlobal( RESULTS_HANDLE, new ArrayList<String>(), true) );
		cmds.add( CommandFactory.newInsert(new InFact(value), IN_HANDLE ));
		//		        cmds.add( CommandFactory.newInsert(new String(), "out" ));
		GetObjectsCommand getObjectsCommand = new GetObjectsCommand();
		cmds.add(commandsFactory.newGetObjects(OBJECT_HANDLE));
		cmds.add(commandsFactory.newFireAllRules());
		BatchExecutionCommand batchExecution = commandsFactory.newBatchExecution(cmds);
		ServiceResponse<ExecutionResults> response = ruleClient.executeCommandsWithResults(CONTAINER_ID, batchExecution);

		System.out.println("KIESERVER results identifiers ----->: "+response.getResult().getIdentifiers()+ "\n -------------------------------------");
		//		        System.out.println(" OBJECT_HANDLE "+ response.getResult().getValue( OBJECT_HANDLE )); //
		//		        System.out.println(" customer1 "+ response.getResult().getValue( IN_HANDLE )); //

		System.out.println(" APPROVALS List "+ response.getResult().getValue( RESULTS_HANDLE )); // returns the ArrayList

		ArrayList<String> results = response.getResult().getValue( RESULTS_HANDLE ) != null ? (ArrayList<String>) response.getResult().getValue( RESULTS_HANDLE ) : new ArrayList<String>();
		
		return results;	
	}



	//    @Override
	//    public void save(User user, String rawPassword) {
	//        String password = passwordEncoder.encode(rawPassword);
	//        user.setPassword(password);
	//
	//        Date now = new DateTime().toDate();
	//        if (user.getCreatedAt() == null) {
	//            user.setCreatedAt(now);
	//        }
	//
	//        user.setUpdatedAt(now);
	//        userRepository.save(user);
	//    }
	//
	//    @Override
	//    @Transactional(readOnly = true)
	//    public User findOne(Integer id) {
	//        User user = userRepository.findOne(id);
	//        if (user == null) {
	//            throw new ResourceNotFoundException("User [id=" + id
	//                    + "] is not found.");
	//        }
	//        return user;
	//    }
	//
	//    @Override
	//    @Transactional(readOnly = true)
	//    public Page<User> findAll(Pageable pageable) {
	//        Page<User> page = userRepository.findAll(pageable);
	//        return page;
	//    }
	//
	//    @Override
	//    @Transactional(readOnly = true)
	//    public Page<User> findByNameLike(String name, Pageable pageable) {
	//        String query = name; // TODO escape
	//        Page<User> page = userRepository.findByNameLike(query, pageable);
	//        return page;
	//    }
	//
	//    @Override
	//    public void delete(User user) {
	//        userRepository.delete(user);
	//    }

}
