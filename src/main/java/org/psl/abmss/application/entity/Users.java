package org.psl.abmss.application.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;

@Entity
@Table(name = "ALL_USERS")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "USER_ID")
	private Integer userId;

	@Column(name = "LOGON_ID")
	private String logonId;
	
	@Column(name = "USER_NAME")
	private String userName;

	@Column(name = "USER_PASSWORD")
	@Transient
	private String userPass;

	@Column(name = "USER_EMAIL")
	private String userEmail;
	
	@Column(name = "USER_PHONE")
	private Long userPhone;

	@Column(name = "IS_ACTIVE")
	private boolean active;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "USER_ROLE", joinColumns = @JoinColumn(name = "USER_ID"), inverseJoinColumns = @JoinColumn(name = "ROLE_ID"))
	private Set<Role> roles;
	
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPass() {
		return userPass;
	}

	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Users(Users user) {
		this.userId = user.getUserId();
		this.userName = user.getUserName();
		this.userPass = user.getUserPass();
		
		this.logonId = user.getLogonId();
		this.userPhone = user.getUserPhone();
		
		this.userEmail = user.getUserEmail();
		this.active = user.isActive();
		this.roles = user.getRoles();
	}

	public Users(String userName, String userPass, String logonId, Long phoneNumber, String userEmail, Set<Role> roles) {

		this.userName = userName;
		this.userPass = userPass;
		this.logonId = logonId;
		this.userPhone = phoneNumber;
		this.userEmail = userEmail;
		this.active = true;
		this.roles = roles;
	}

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getLogonId() {
		return logonId;
	}

	public void setLogonId(String logonId) {
		this.logonId = logonId;
	}

	public Long getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(Long userPhone) {
		this.userPhone = userPhone;
	}

	@Override
	public String toString() {
		return "Users [userId=" + userId + ", logonId=" + logonId + ", userName=" + userName + ", userPass=" + userPass
				+ ", userEmail=" + userEmail + ", userPhone=" + userPhone + ", active=" + active + ", roles=" + roles
				+ "]";
	}
}
