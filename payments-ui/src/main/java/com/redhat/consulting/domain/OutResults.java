package com.redhat.consulting.domain;

import java.util.ArrayList;

public class OutResults {

	ArrayList<String> approvals;

	public ArrayList<String> getApprovals() {
		return approvals;
	}

	
	
	public void addApproval(String approval) {
		if (approvals == null) {
			approvals = new ArrayList<String>();
		}
		approvals.add(approval);
	}
	
	
}
