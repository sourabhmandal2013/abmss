package org.psl.abmss.application.api;

import org.psl.abmss.application.dto.SmsDTO;
import org.psl.abmss.application.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SmsAPI {
	@Autowired
	SmsService smsService;
	
	@RequestMapping(value = "/abmss/sendsms", method = {RequestMethod.POST})
	public String sendSmsAppointmentNotification(@RequestBody SmsDTO smsDTO)
    {
		
		boolean result = false;
		try {
			if(smsDTO.getMessage().isEmpty()){
				return smsService.sendSms(smsDTO.getTo());
			}
			else {
				return smsService.sendSmsWithCustomMessage(smsDTO.getTo(), smsDTO.getMessage());
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return "FAILED";
    }
}
