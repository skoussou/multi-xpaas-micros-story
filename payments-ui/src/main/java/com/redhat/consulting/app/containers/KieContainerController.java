package com.redhat.consulting.app.containers;

import java.util.ArrayList;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.groups.Default;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.redhat.consulting.app.payee.PayeeForm;
import com.redhat.consulting.app.user.UserForm.UserUpdateGroup;
import com.redhat.consulting.domain.model.Approval;
import com.redhat.consulting.domain.model.Payee;
import com.redhat.consulting.domain.service.containers.KieContainerService;

@Controller
@RequestMapping("kiecontainer")
public class KieContainerController {

	protected final Logger logger = LoggerFactory.getLogger(getClass());

	
    @Inject
    protected KieContainerService kieService;
    
    @ModelAttribute
    public KieContainerExecForm setUpForm() {
        return new KieContainerExecForm();
    }
    
    @RequestMapping(value = "execRules", method = RequestMethod.GET)
    public String getDetails(@RequestParam(value="amount") String amount, Model model,
    		KieContainerExecForm form){
        	
        	Page<Approval> page = new PageImpl<Approval>(new ArrayList<Approval>());
        	
            if (amount != null && amount != "" && amount != "-1") {
            	logger.info("    Executing RULES For input : ["+amount+"]" );
            	page = kieService.executeRules(Double.valueOf(amount));
            }
            model.addAttribute("page", page);
            return "kiecontainer/execRules";
        }

    
//    @RequestMapping(value = "execRules")
//    public String list(@PageableDefaults Pageable pageable, Model model,
//    		KieContainerExecForm form) {
//    	
//    	Page<Approval> page = new PageImpl<Approval>(new ArrayList<Approval>());
//    	
//        if (form.getAmount() != null) {
//        	logger.info("    Executing RULES For input : ["+form.getAmount()+"]" );
//        	page = kieService.executeRules(form.getAmount());
//        }
//        model.addAttribute("page", page);
//        return "kiecontainer/execRules";
//    }

}
