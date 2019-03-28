package org.psl.abmss.application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CITIES")
public class Cities {
	
	@Id
	@Column(name = "CITY_ID")
	private Integer cityId;

	@Column(name = "CITY_NAME")
	private String cityName;

	@Column(name = "CITY_STATE")
	private String cityState;

	public Integer getCityId() {
		return cityId;
	}

	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getCityState() {
		return cityState;
	}

	public void setCityState(String cityState) {
		this.cityState = cityState;
	}

	
}
