package org.psl.abmss.application.dto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.httpclient.NameValuePair;

public class SmsDTO {
	private List<String> to;
	private String message;
	public List<String> getTo() {
		return to;
	}
	public void setTo(List<String> to) {
		this.to = to;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public SmsDTO(List<String> to, String message) {
		super();
		this.to = to;
		this.message = message;
	}
	
	
	public SmsDTO() {
		super();
	}
	public List<NameValuePair> getNameValuePair() {
		List<NameValuePair> pair=new ArrayList<NameValuePair>();
		pair.add(new NameValuePair("message", this.message));
		pair.add(new NameValuePair("to",Arrays.asList(to).toString()));
		return pair;
		
	}
	
}
