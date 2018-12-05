package org.psl.abmss.application.dto;

import java.util.Set;

import org.psl.abmss.application.entity.Role;

public class UserRoleDTO {
	
	private String userId;

    private String roleType;

	private Set<Role> roleList;
	
	public String getUserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getRoleType() {
		return roleType;
	}
	
	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}
	
	public Set<Role> getRoleList() {
		return roleList;
	}
	
	public void setRoleList(Set<Role> roleList) {
		this.roleList = roleList;
	}
	
	public UserRoleDTO(String userId, Set<Role> roleList)
    {
        super();
        this.userId = userId;
        this.roleList = roleList;
    }

}
