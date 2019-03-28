package org.psl.abmss.application.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TRANSPORTATION")
public class Transportation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "TRANSPORTATION_ID")
	private Integer transId;

	@Column(name = "PATIENT_ID")
	private Integer patientId;

	@Column(name = "ADDED_BY")
	private Integer addedBy;

	@Column(name = "TRANSPORTATION_TO_CENTER_DATE")
	private Date transToCentreDt;

	@Column(name = "TRANSPORTATIONTO_HOME_DATE")
	private Date transToHomeDt;

	@Column(name = "DISTANCE")
	private String distance;

	public int getTrans_id() {
		return transId;
	}

	public void setTrans_id(int trans_id) {
		this.transId = trans_id;
	}

	public int getPatient_id() {
		return patientId;
	}

	public void setPatient_id(int patient_id) {
		this.patientId = patient_id;
	}

	public int getAddedby() {
		return addedBy;
	}

	public void setAddedby(int addedby) {
		this.addedBy = addedby;
	}

	public Date getTrans_to_centre_dt() {
		return transToCentreDt;
	}

	public void setTrans_to_centre_dt(Date trans_to_centre_dt) {
		this.transToCentreDt = trans_to_centre_dt;
	}

	public Date getTrans_to_home_dt() {
		return transToHomeDt;
	}

	public void setTrans_to_home_dt(Date trans_to_home_dt) {
		this.transToHomeDt = trans_to_home_dt;
	}

	public String getDistance() {
		return distance;
	}

	public void setDistance(String distance) {
		this.distance = distance;
	}
}
