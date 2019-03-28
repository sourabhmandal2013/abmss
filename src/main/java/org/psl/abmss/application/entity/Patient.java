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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PATIENT")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "PATIENT_ID")
	private Integer patientId;

	@OneToOne
	@JoinTable(name = "PATIENT_USER", joinColumns = @JoinColumn(name = "PATIENT_ID"), inverseJoinColumns = @JoinColumn(name = "USER_ID"))
	private Users user;

	@Column(name = "INSTITUTIONS_FILE_NO")
	private String institutionsFileNo;

	@Column(name = "CHILD_NAME")
	private String childName;

	@Column(name = "CHILD_DOB")
	private String childDob;

	@OneToOne
	@JoinTable(name = "ENTERED_BY_USER", joinColumns = @JoinColumn(name = "PATIENT_ID"), inverseJoinColumns = @JoinColumn(name = "USER_ID"))
	private Users enteredBy;

	@Column(name = "PATIENT_GUARDIAN_NAME")
	private String patientGuardianName;

	@Column(name = "PATIENT_GENDER")
	private String gender;

	@Column(name = "PATIENT_AGE")
	private Integer age;

	@OneToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "PATIENT_INSTITUTION", joinColumns = @JoinColumn(name = "PATIENT_ID"), inverseJoinColumns = @JoinColumn(name = "INSTITUTION_ID"))
	private Set<Institution> institution;

	@Column(name = "PRIMARY_CONTACT_NO")
	private String primary_contact_no;

	@Column(name = "EMAIL_ID")
	private String email_id;

	@Column(name = "PATIENT_ADDRESS")
	private String address;
	
	@OneToOne
	@JoinTable(name = "PATIENT_CITY_STATE",joinColumns = @JoinColumn(name = "PATIENT_ID"), inverseJoinColumns = @JoinColumn(name = "CITY_ID"))
	private Cities cityState;

	@Column(name = "PATIENT_ALTERNATIVE_CONTACT_1")
	private String alt_con_no_1;

	@Column(name = "PATIENT_ALTERNATIVE_CONTACT_2")
	private String alt_con_no_2;

	public String getInstitutionsFileNo() {
		return institutionsFileNo;
	}

	public void setInstitutionsFileNo(String institutionsFileNo) {
		this.institutionsFileNo = institutionsFileNo;
	}

	public String getChildName() {
		return childName;
	}

	public void setChildName(String childName) {
		this.childName = childName;
	}

	public String getChildDob() {
		return childDob;
	}

	public void setChildDob(String childDob) {
		this.childDob = childDob;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public Users getEnteredBy() {
		return enteredBy;
	}

	public void setEnteredBy(Users enteredBy) {
		this.enteredBy = enteredBy;
	}

	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

//	public String getFileNo() {
//		return fileNo;
//	}
//
//	public void setFileNo(String fileNo) {
//		this.fileNo = fileNo;
//	}

	public String getPatientGuardianName() {
		return patientGuardianName;
	}

	public void setPatientGuardianName(String patientName) {
		this.patientGuardianName = patientName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	
	public Set<Institution> getInstitution() {
		return institution;
	}

	public void setInstitution(Set<Institution> institution) {
		this.institution = institution;
	}

	public String getPrimary_contact_no() {
		return primary_contact_no;
	}

	public void setPrimary_contact_no(String primary_contact_no) {
		this.primary_contact_no = primary_contact_no;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Cities getCityState() {
		return cityState;
	}

	public void setCityState(Cities cityState) {
		this.cityState = cityState;
	}

	public String getAlt_con_no_1() {
		return alt_con_no_1;
	}

	public void setAlt_con_no_1(String alt_con_no_1) {
		this.alt_con_no_1 = alt_con_no_1;
	}

	public String getAlt_con_no_2() {
		return alt_con_no_2;
	}

	public void setAlt_con_no_2(String alt_con_no_2) {
		this.alt_con_no_2 = alt_con_no_2;
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", user=" + user + ", institutionsFileNo=" + institutionsFileNo
				+ ", childName=" + childName + ", childDob=" + childDob + ", enteredBy=" + enteredBy
				+ ", patientGuardianName=" + patientGuardianName + ", gender=" + gender + ", age=" + age
				+ ", institution=" + institution + ", primary_contact_no=" + primary_contact_no + ", email_id="
				+ email_id + ", address=" + address + ", cityState=" + cityState + ", alt_con_no_1=" + alt_con_no_1
				+ ", alt_con_no_2=" + alt_con_no_2 + "]";
	}
	
	
}
