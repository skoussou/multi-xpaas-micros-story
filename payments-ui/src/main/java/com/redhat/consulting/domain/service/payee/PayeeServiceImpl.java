package com.redhat.consulting.domain.service.payee;

import java.util.ArrayList;
import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.redhat.consulting.domain.model.Payee;

@Service
@Transactional
public class PayeeServiceImpl implements PayeesService {

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	protected final String FIS_JDG_SERVICE_URL = System.getProperty("org.fis.jdg.url", "http://fis-rest-1-poc.apps.ocp.uaeexchange.com");
	protected final String FIS_JDG_GET_PAYEES_REST_ENDPOING = System.getProperty("org.fis.jdg.get.all.payees", "/payees/");
	protected final String FIS_JDG_POST_PAYEE_REST_ENDPOING = System.getProperty("org.fis.jdg.post.payee", "/payees/");
	protected final String FIS_JDG_GET_A_PAYEE_REST_ENDPOING = System.getProperty("org.fis.jdg.get.payee", "/payees/payee/");

	
	@Override
	public void addPayee(Payee payee) {
		
		String serviceURL = FIS_JDG_SERVICE_URL + FIS_JDG_POST_PAYEE_REST_ENDPOING;
		
		HttpEntity<Payee> entity = createRestClient(payee);
		
        // RestTemplate
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Payee> response = restTemplate.exchange(serviceURL, HttpMethod.POST, entity, Payee.class);

        logger.info("========================================================");
        logger.info("     Adding new Payee FIS SERVICE (POST /payees/ with details ["+payee+"]");

        logger.info(" FIS SERVICE (POST /payees/) Response \n                     ["+response.getBody()+"]");
        logger.info("========================================================"); 
	}

	@Override
	public Page<Payee> retrievePayees(Integer limit) {
		
		String serviceURL = FIS_JDG_SERVICE_URL + FIS_JDG_GET_PAYEES_REST_ENDPOING;
		
		HttpEntity<Payee> entity = createRestClient(null);
		
        // RestTemplate
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<ArrayList> response = restTemplate.exchange(serviceURL, HttpMethod.GET, entity, ArrayList.class);

        logger.info("========================================================");
        logger.info(" FIS SERVICE (GET /payees/) Response \n                     ["+response.getBody()+"]");
        logger.info("========================================================"); 
        
        ArrayList<Payee> payeeEntries = (ArrayList<Payee>) response.getBody();
        
        Page<Payee> page = new PageImpl<Payee>(payeeEntries);
        return page;
//        ArrayList<Payee> payeeEntries = new ArrayList<Payee>();
//        Payee payee1 = new Payee(1, "Stelios", "Barclays", "000112312");
//        Payee payee2 = new Payee(2, "Raif", "Bank Audi", "3222222");
//        Payee payee3 = new Payee(3, "Kaifi", "Bank Dubai", "211111");
//
//        payeeEntries.add(payee1);
//        payeeEntries.add(payee2);
//        payeeEntries.add(payee3);
//        
//        Page<Payee> page = new PageImpl<Payee>(payeeEntries);
//        return page;
	}

	@Override
	public Payee getPayeeDetails(Integer id) {

		String serviceURL = FIS_JDG_SERVICE_URL + FIS_JDG_GET_A_PAYEE_REST_ENDPOING + id;
		
		HttpEntity<Payee> entity = createRestClient(null);
		
        // RestTemplate
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Payee> response = restTemplate.exchange(serviceURL, HttpMethod.GET, entity, Payee.class);

        logger.info("========================================================");
        logger.info(" FIS SERVICE (GET /payees/payee/{"+id+") Response \n                     ["+response.getBody()+"]");
        logger.info("========================================================"); 
        
        Payee payeeDetails = (Payee) response.getBody();
		
        if (payeeDetails == null){
        	payeeDetails = new Payee();
		}
		return payeeDetails;
		//return new Payee(1, "Stelios", "Barclays", "000112312");

	}

	
	private HttpEntity<Payee> createRestClient(Payee payload) {
		
		// HttpHeaders
        HttpHeaders headers = new HttpHeaders();
 
        headers.setAccept(Arrays.asList(new MediaType[] { MediaType.APPLICATION_JSON }));
        // Request to return JSON format
        headers.setContentType(MediaType.APPLICATION_JSON);
        //headers.set("my_other_key", "my_other_value");
 
        // HttpEntity<String>: To get result as String.
        HttpEntity<Payee> entity;
        
        if (payload != null) {
        	entity = new HttpEntity<Payee>(payload, headers);
        } else {
        	entity = new HttpEntity<Payee>(headers);
        }
                
       return entity;
		
	}
}
