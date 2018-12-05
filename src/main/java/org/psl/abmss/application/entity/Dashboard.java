package org.psl.abmss.application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DASHBOARD")
public class Dashboard {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "SERVICE_ID")
	private Integer serviceId;

	@Column(name = "SERVICE_NAME")
	private String serviceName;

	@Column(name = "COUNT")
	private Integer count;

	public Integer getService_id() {
		return serviceId;
	}

	public void setService_id(Integer service_id) {
		this.serviceId = service_id;
	}

	public String getService_name() {
		return serviceName;
	}

	public void setService_name(String service_name) {
		this.serviceName = service_name;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}
}
