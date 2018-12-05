package org.psl.abmss.application.dto;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.httpclient.NameValuePair;

public class SmsApiDTO {
	private String sender;
	private String route;
	private String country;
	private SmsDTO sms;
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getRoute() {
		return route;
	}
	public void setRoute(String route) {
		this.route = route;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public SmsDTO getSms() {
		return sms;
	}
	public void setSms(SmsDTO sms) {
		this.sms = sms;
	}
	
	public List<NameValuePair> getNameValuePair() {
		List<NameValuePair> pair=new ArrayList<NameValuePair>();
		pair.add(new NameValuePair("sender", this.sender));
		pair.add(new NameValuePair("route", this.route));
		pair.add(new NameValuePair("country", this.country));
		for (NameValuePair nameValuePair : sms.getNameValuePair()) {
			pair.add(new NameValuePair("sms", nameValuePair.toString()));
		}
		return pair;
	}
	public SmsApiDTO() {
	}
	
	
}
