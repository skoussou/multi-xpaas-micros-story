package com.redhat.consulting.domain.model;

import java.io.Serializable;

public class Payee implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4735048593544521252L;
	
	private Integer id;
	private String name;
	private String bankName;
	private String accountNumber;
	
	public Payee(){
	}
	
	public Payee(Integer id, String name, String bankName, String accountNumber) {
		super();
		this.id = id;
		this.name = name;
		this.bankName = bankName;
		this.accountNumber = accountNumber;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	@Override
	public String toString() {
		return "Payee [id=" + id + ", name=" + name + ", bankName=" + bankName + ", accountNumber=" + accountNumber
				+ "]";
	}
	
}
