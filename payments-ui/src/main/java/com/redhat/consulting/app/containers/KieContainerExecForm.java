package com.redhat.consulting.app.containers;

import java.io.Serializable;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

import com.redhat.consulting.app.user.UserForm.UserCreateGroup;
import com.redhat.consulting.app.user.UserForm.UserDeleteGroup;
import com.redhat.consulting.app.user.UserForm.UserUpdateGroup;

public class KieContainerExecForm implements Serializable {

    @NotNull()
    @Min(1)
    private Double amount;
	
    @Null(groups = { UserCreateGroup.class })
    @NotNull(groups = { UserUpdateGroup.class, UserDeleteGroup.class })
    @Min(0)
    private Integer version;

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}
}
