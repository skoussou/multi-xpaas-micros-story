package com.redhat.consulting.app.payee;

import javax.inject.Inject;
import javax.validation.groups.Default;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.redhat.consulting.app.user.UserForm.UserUpdateGroup;
import com.redhat.consulting.domain.model.Payee;
import com.redhat.consulting.domain.service.payee.PayeesService;

@Controller
@RequestMapping("payees")
public class PayeeController {

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
    @Inject
    protected PayeesService payeeService;
    
    @ModelAttribute
    public PayeeForm setUpForm() {
        return new PayeeForm();
    }
    
    @RequestMapping("list")
    public String list(@PageableDefaults Pageable pageable, Model model) {
    	System.out.println("RAIF WAS HERE");
        Page<Payee> page = payeeService.retrievePayees(-1);
        model.addAttribute("page", page);
        return "payees/list";
    }

    @RequestMapping(value = "create", method = RequestMethod.POST)
    public String create(
            @Validated({ Default.class, UserUpdateGroup.class }) PayeeForm form,
            BindingResult result) {
        if (result.hasErrors()) {
            return "payees/list";
        }

        Payee newPayee = new Payee(form.getId(), form.getName(), form.getBankName(), form.getAccountNumber());
        
        logger.info("     Adding new Payee via payees/create with details ["+newPayee+"]");
        
        payeeService.addPayee(newPayee);

        return "payees/list";
    }
}
