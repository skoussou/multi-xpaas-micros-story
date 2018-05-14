/*
 * Copyright 2005-2016 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version
 * 2.0 (the "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied.  See the License for the specific language governing
 * permissions and limitations under the License.
 */
package com.rahmed.redhat.demo.rest;

import java.io.Serializable;

import org.infinispan.protostream.annotations.ProtoField;
import org.infinispan.protostream.annotations.ProtoMessage;

import io.swagger.annotations.ApiModelProperty;

import org.infinispan.protostream.UnknownFieldSet;


//@ProtoMessage(name = "Payee")
public class Payee implements Serializable {

	private Integer id;
	private String name;
	private String bankName;
	private String accountNumber;

	@ApiModelProperty(required = false, hidden = true)
	private UnknownFieldSet unknownFieldSet;

	// @ProtoDoc("@IndexedField(index = true, store = false)")
	//@ProtoField(number = 1)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	// @ProtoDoc("@IndexedField(index = true, store = false)")
	//@ProtoField(number = 2)
	public String getName() {
		return name;
	}

	public void setName(String payeeName) {
		this.name = payeeName;
	}

	// @ProtoDoc("@IndexedField(index = true, store = false)")
	//@ProtoField(number = 3)
	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	// @ProtoDoc("@IndexedField(index = true, store = false)")
	//@ProtoField(number = 4)
	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public UnknownFieldSet getUnknownFieldSet() {
		return unknownFieldSet;
	}

	public void setUnknownFieldSet(UnknownFieldSet unknownFieldSet) {
		this.unknownFieldSet = unknownFieldSet;
	}

	@Override
	public String toString() {

		return "[id=" + id + "," + ", name=" + name + ", bankName=" + bankName + ", accountNumber=" + accountNumber
				+ "]";
	}
}
