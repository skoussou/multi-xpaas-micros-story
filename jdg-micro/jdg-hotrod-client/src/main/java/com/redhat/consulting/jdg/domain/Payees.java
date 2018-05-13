package com.redhat.consulting.jdg.domain;

import java.util.ArrayList;

import org.infinispan.protostream.annotations.ProtoDoc;
import org.infinispan.protostream.annotations.ProtoField;
import org.infinispan.protostream.annotations.ProtoMessage;

import com.redhat.consulting.lh.service.APIs;

@ProtoMessage(name = "Payees")
//@ProtoDoc("@Indexed")
public class Payees {
	
	String name;
	
	String bankName;

        String bankAccountNumber;


    //@ProtoDoc("@IndexedField(index = true, store = false)")
    @ProtoField(number = 1)
	public String getName() {
		return name;
	}
	
    //@ProtoDoc("@IndexedField(index = true, store = false)")
    @ProtoField(number = 2)
    public String getBankName() {
		return bankName;
	}

    @ProtoField(number = 3)
    public String getBankAccountNumber() {
		return bankAccountNumber;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public void addPlaneId(String bankAccountNumber) {
		this.planeIds = bankAccountNumber;
	}

	@Override
	public String toString() {
		return "Payees [name=" + name + ", bankName=" + bankName + ", bankAccountNumber=" + bankAccountNumber + "]";
	}
}
