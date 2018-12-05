package org.psl.abmss.application.dto;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AddUserDTO {
	@NotBlank
    @Size(min = 4, max = 60)
    private String userName;
    @NotBlank
    @Size(max = 40)
    @Email
    private String userEmail;
    @NotBlank
    @Size(min = 6, max = 20)
    private String userPass;
    @NotBlank
    @Size(min = 10, max = 10)
    private Long userPhone;
    
    public Long getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(Long userPhone) {
		this.userPhone = userPhone;
	}

	private List<Integer> roleId;

    /*PatientDTO patient;
    
    
	public PatientDTO getPatient() {
		return patient;
	}

	public void setPatient(PatientDTO patient) {
		this.patient = patient;
	}*/

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPass() {
		return userPass;
	}

	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}

	public List<Integer> getRoleId() {
		return roleId;
	}

	public void setRoleId(List<Integer> roleId) {
		this.roleId = roleId;
	}
    
    
       
}
