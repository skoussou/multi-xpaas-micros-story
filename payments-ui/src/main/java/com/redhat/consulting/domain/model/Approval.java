package com.redhat.consulting.domain.model;

import javax.persistence.Column;

public class Approval {

    private String type;

    
    
	public Approval(String type) {
		super();
		this.type = type;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
    
    
}
