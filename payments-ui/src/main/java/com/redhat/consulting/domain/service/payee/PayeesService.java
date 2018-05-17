package com.redhat.consulting.domain.service.payee;

import org.springframework.data.domain.Page;

import com.redhat.consulting.domain.model.Payee;

public interface PayeesService {

	void  addPayee(Payee payee);
	Page<Payee>  retrievePayees(Integer limit);
	Payee getPayeeDetails(Integer id);

}
