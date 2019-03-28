package org.psl.abmss.application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
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

	
	@Column(name = "INSTITUTION_ADDRESS")
	private String institutionAddress;

	@Column(name = "INSTITUTION_PHONE")
	private String phone;

	@Column(name = "INSTITUTION_POC")
	private String pointOfContact;
	
	@OneToOne
	@JoinTable(name = "INSTITUTION_CITY_STATE", joinColumns = @JoinColumn(name = "institution_id"), inverseJoinColumns = @JoinColumn(name = "CITY_ID"))
	private Cities cityState;

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

	@Override
	public String toString() {
		return "Institution [institutionId=" + institutionId + ", institutionName=" + institutionName
				+ ", institutionAddress=" + institutionAddress + ", phone=" + phone + ", pointOfContact="
				+ pointOfContact + ", cityState=" + cityState + "]";
	}
	
	

}
