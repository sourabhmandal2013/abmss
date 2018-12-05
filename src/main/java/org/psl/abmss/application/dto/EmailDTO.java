package org.psl.abmss.application.dto;

import java.util.ArrayList;
import java.util.List;

public class EmailDTO {
	
	private String from;
	/*private String to;*/
	private String subject;
	
	List<UserDTO> users = new ArrayList<UserDTO>();  
	
//	private String message;
	
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}/*
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}*/
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	/*public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}*/
	public List<UserDTO> getUsers() {
		return users;
	}
	public void setUsers(List<UserDTO> users) {
		this.users = users;
	}
	
	
	
	
	
	
}
