package org.psl.abmss.application.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author sourabh_mandal
 *
 */
@Entity
@Table(name = "SPT")
public class SpeechTherapy {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "SPT_ID")
	private Integer speechTherapyId;

	@Column(name = "PATIENT_ID")
	private Integer patientId;

	@Column(name = "ADDED_BY")
	private Integer addedBy;

	@Column(name = "TREATEMENT_START_DATE")
	private Date trtmtStartDt;

	@Column(name = "TREATEMENT_BOOKED_DATE")
	private Date trtmtBookedDt;

	@Column(name = "TREATING_PERSON")
	private String treatingPerson;

	@Column(name = "IS_COMPLETE")
	private boolean complete;

	public Integer getSpeechTherapyId() {
		return speechTherapyId;
	}

	public void setSpeechTherapyId(Integer speechTherapyId) {
		this.speechTherapyId = speechTherapyId;
	}

	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

	public Integer getAddedBy() {
		return addedBy;
	}

	public void setAddedBy(Integer addedBy) {
		this.addedBy = addedBy;
	}

	public Date getTrtmtStartDt() {
		return trtmtStartDt;
	}

	public void setTrtmtStartDt(Date trtmtStartDt) {
		this.trtmtStartDt = trtmtStartDt;
	}

	public Date getTrtmtBookedDt() {
		return trtmtBookedDt;
	}

	public void setTrtmtBookedDt(Date trtmtBookedDt) {
		this.trtmtBookedDt = trtmtBookedDt;
	}

	public String getTreatingPerson() {
		return treatingPerson;
	}

	public void setTreatingPerson(String treatingPerson) {
		this.treatingPerson = treatingPerson;
	}

	public boolean isComplete() {
		return complete;
	}
	public void setComplete(boolean complete) {
		this.complete = complete;
	}

}
