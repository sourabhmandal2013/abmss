package org.psl.abmss.application.dto;

public class InstitutionDTO {

	private Integer institutionId;
	private String institutionName;
	private String city;
	private String institutionAddress;
	private String phone;
	private Integer pointOfContact;

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
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
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
	public Integer getPointOfContact() {
		return pointOfContact;
	}
	public void setPointOfContact(Integer pointOfContact) {
		this.pointOfContact = pointOfContact;
	}

}
