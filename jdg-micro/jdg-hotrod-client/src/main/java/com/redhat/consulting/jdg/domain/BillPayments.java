package com.redhat.consulting.jdg.domain;

import java.util.ArrayList;

import org.infinispan.protostream.annotations.ProtoDoc;
import org.infinispan.protostream.annotations.ProtoField;
import org.infinispan.protostream.annotations.ProtoMessage;

import com.redhat.consulting.lh.service.APIs;

@ProtoMessage(name = "BillPaynents")
//@ProtoDoc("@Indexed")
public class BillPaynents {
	
	Payee payee;
	
	Float amount;


    //@ProtoDoc("@IndexedField(index = true, store = false)")
    @ProtoField(number = 1)
	public Payee getPayee() {
		return payee;
	}
	
    //@ProtoDoc("@IndexedField(index = true, store = false)")
    @ProtoField(number = 2)
    public Float getPayeed() {
		return payee;
	}



	public void setPayee(Payee payee) {
		this.payee = payee;
	}

	public void setPayeed(Float amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Payees [payee=" + payee + ", amount=" + amount +"]";
	}
}
