package com.redhat.consulting.domain.service.containers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.redhat.consulting.domain.model.Approval;
import com.redhat.consulting.domain.model.User;

public interface KieContainerService {

	Page<Approval>  executeRules(Double value);
}
