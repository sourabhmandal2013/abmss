package org.psl.abmss.application.dto;

import org.psl.abmss.application.entity.Cities;

public class PatientDTO {
	
	private String institutionsFileNo;
	private String childName;
	private String childDob;
	private Integer childBelongsToInstitution;
	private Integer patientId;
	private Integer userId;
	private String fileNo;
	private String patientGuardianName;
	private String gender;
	private Integer age;
	private String primary_contact_no;
	private String email_id;
	private String address;
	private Cities cityState;
	private String alt_con_no_1;
	private String alt_con_no_2;
	private String enteredByUserId;
//	private List<Integer> centerId;
	
	/*
	public Integer getChildId() {
		return childId;
	}
	public void setChildId(Integer childId) {
		this.childId = childId;
	}*/
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
	public Integer getChildBelongsToInstitution() {
		return childBelongsToInstitution;
	}
	public void setChildBelongsToInstitution(int childBelongsToInstitution) {
		this.childBelongsToInstitution = childBelongsToInstitution;
	}
	public Integer getPatientId() {
		return patientId;
	}
	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}
	public String getFileNo() {
		return fileNo;
	}
	public void setFileNo(String fileNo) {
		this.fileNo = fileNo;
	}
	public String getPatientName() {
		return patientGuardianName;
	}
	public void setPatientName(String patientName) {
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

	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getPatientGuardianName() {
		return patientGuardianName;
	}
	public void setPatientGuardianName(String patientGuardianName) {
		this.patientGuardianName = patientGuardianName;
	}
	public void setChildBelongsToInstitution(Integer childBelongsToInstitution) {
		this.childBelongsToInstitution = childBelongsToInstitution;
	}
	/*public InstitutionDTO getCenter() {
		return center;
	}
	public void setCenter(InstitutionDTO center) {
		this.center = center;
	}*/
	/*public void setEnteredBy(UserDTO enteredBy) {
		this.enteredBy = enteredBy;
	}
	public UserDTO getEnteredBy() {
		return enteredBy;
	}*/
	public String getEnteredByUserId() {
		return enteredByUserId;
	}
	public void setEnteredByUserId(String enteredByUserId) {
		this.enteredByUserId = enteredByUserId;
	}
//	public List<Integer> getCenterId() {
//		return centerId;
//	}
//	public void setCenterId(List<Integer> centerId) {
//		this.centerId = centerId;
//	}
	@Override
	public String toString() {
		return "PatientDTO [institutionsFileNo=" + institutionsFileNo + ", childName=" + childName + ", childDob="
				+ childDob + ", childBelongsToInstitution=" + childBelongsToInstitution + " , patientId=" + patientId + ", userId=" + userId + ", fileNo=" + fileNo + ", patientGuardianName="
				+ patientGuardianName + ", gender=" + gender + ", age=" + age + ", primary_contact_no="
				+ primary_contact_no + ", email_id=" + email_id + ", address=" + address + ", cityState=" + cityState
				+ ", alt_con_no_1=" + alt_con_no_1 + ", alt_con_no_2=" + alt_con_no_2 + ", enteredByUserId="
				+ enteredByUserId + "]";
	}
	
	
}
