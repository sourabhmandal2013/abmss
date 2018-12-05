package org.psl.abmss.application.service;

import java.util.List;

public interface SmsService {

	public String sendSms(List<String> mobileNo);
	
	public String sendSmsWithCustomMessage(List<String> mobileNo, String message);
}
