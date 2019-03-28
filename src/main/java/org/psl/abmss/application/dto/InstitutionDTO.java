package org.psl.abmss.application.dto;

import org.psl.abmss.application.entity.Cities;

public class InstitutionDTO {

	private Integer institutionId;
	private String institutionName;
	private Cities cityState;
	private String institutionAddress;
	private String phone;
	private String pointOfContact;

	public Integer getInstitutionId() {
		return institutionId;
	}
	public void setInstitutionId(Integer institutionId) {
		this.institutionId = institutionId;
	}
	public String getInstitutionName() {
		return institutionName;
	}
	public void setInstitutionName(String institutionName) {
		this.institutionName = institutionName;
	}
	
	public Cities getCityState() {
		return cityState;
	}
	public void setCityState(Cities cityState) {
		this.cityState = cityState;
	}
	public String getInstitutionAddress() {
		return institutionAddress;
	}
	public void setInstitutionAddress(String institutionAddress) {
		this.institutionAddress = institutionAddress;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPointOfContact() {
		return pointOfContact;
	}
	public void setPointOfContact(String pointOfContact) {
		this.pointOfContact = pointOfContact;
	}

}
