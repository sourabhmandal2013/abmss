package org.psl.abmss.application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "INSTITUTION")
public class Institution {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "INSTITUTION_ID")
	private Integer institutionId;

	@Column(name = "INSTITUTION_NAME")
	private String institutionName;

	@Column(name = "CITY")
	private String city;

	@Column(name = "INSTITUTION_ADDRESS")
	private String institutionAddress;

	@Column(name = "INSTITUTION_PHONE")
	private String phone;

	@Column(name = "INSTITUTION_POC")
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
