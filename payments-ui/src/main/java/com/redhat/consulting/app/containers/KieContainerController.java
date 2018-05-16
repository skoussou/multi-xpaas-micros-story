package com.redhat.consulting.app.containers;

import javax.inject.Inject;
import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.redhat.consulting.domain.model.Approval;
import com.redhat.consulting.domain.service.containers.KieContainerService;

@Controller
@RequestMapping("kiecontainer")
public class KieContainerController {

    @Inject
    protected KieContainerService kieService;
    
    @ModelAttribute
    public KieContainerExecForm setUpForm() {
        return new KieContainerExecForm();
    }
    
    @RequestMapping("execRules")
    public String list(@PageableDefaults Pageable pageable, Model model) {
    	System.out.println("RAIF WAS HERE");
        Page<Approval> page = kieService.executeRules(900d);
        model.addAttribute("page", page);
        return "kiecontainer/execRules";
    }

}
