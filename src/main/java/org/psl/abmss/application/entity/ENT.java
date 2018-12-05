package org.psl.abmss.application.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ENT")
public class ENT {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ENT_ID")
	private Integer entId;

	@Column(name = "PATIENT_ID")
	private Integer patientId;

	@Column(name = "ADDED_BY")
	private Integer addedBy;

	@Column(name = "TREATEMENT_DATE")
	private Date trtmtDt;

	@Column(name = "TREATING_PERSON")
	private String treatingPerson;

	public Integer getEntId() {
		return entId;
	}

	public void setEntId(Integer entId) {
		this.entId = entId;
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

	public Date getTrtmtDt() {
		return trtmtDt;
	}

	public void setTrtmtDt(Date trtmtDt) {
		this.trtmtDt = trtmtDt;
	}

	public String getTreatingPerson() {
		return treatingPerson;
	}

	public void setTreatingPerson(String treatingPerson) {
		this.treatingPerson = treatingPerson;
	}
}
