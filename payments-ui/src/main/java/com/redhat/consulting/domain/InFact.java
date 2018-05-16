package com.redhat.consulting.domain;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonProperty;

@XmlRootElement
public class InFact {

	
	private Double paymentValue;
	
	public InFact() {
	}
	
	public InFact(Double paymentValue) {
		super();
		this.paymentValue = paymentValue;
	}

	public Double getPaymentValue() {
		return paymentValue;
	}

	public void setPaymentValue(Double paymentValue) {
		this.paymentValue = paymentValue;
	}

	@Override
	public String toString() {
		return "InFact [paymentValue=" + paymentValue + "]";
	}
	
	
}
