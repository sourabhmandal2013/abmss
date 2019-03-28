package org.psl.abmss.application.batch;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.psl.abmss.application.entity.Email;
import org.psl.abmss.application.entity.Patient;
import org.psl.abmss.application.service.EmailService;
import org.psl.abmss.application.service.PatientService;
import org.psl.abmss.application.service.SmsService;
import org.psl.abmss.application.utility.EmailTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ScheduledServices {
	
	@Autowired
	private EmailService emailService;
	
	@Autowired 
	private PatientService patientService;
	
	@Autowired
	private SmsService smsService;
	
	public void sendEmailAndSmsCron() {
		System.out.println("Starting Cron at "+ new Date());
		List<Email> eParams = new ArrayList<Email>();
		List<String> mobileNumber = new ArrayList<String>();
		
		Email e = new Email();
		Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.add(Calendar.DATE, 7);
        Date todayPlusSeven = c.getTime();
		
		EmailTemplate template = new EmailTemplate("email_template_2.html");
			
		List<Patient> todays =  patientService.getPatientsForToday();
		for (Patient patient : todays) {
			Map<String, String> replacements = new HashMap<String, String>();
			replacements.put("guardian", patient.getPatientGuardianName());
			replacements.put("today", String.valueOf(new Date()));
			replacements.put("childName", patient.getChildName());
			String message = template.getTemplate(replacements);
			
			e = new Email();
			e.setTo(Arrays.asList(patient.getEmail_id()));;
			e.setFrom("info@abmss.com");
			e.setHtml(true);
			e.setSubject("NOTIFICATION");
			e.setMessage(message);
			eParams.add(e);
			mobileNumber.add(patient.getAlt_con_no_1());
			mobileNumber.add(patient.getAlt_con_no_2());
			
			
		}
		List<Patient> sevenDays =  patientService.getPatientsForAfterSevenDays();
		for (Patient patient : sevenDays) {
			Map<String, String> replacements = new HashMap<String, String>();
			replacements.put("guardian", patient.getPatientGuardianName());
			replacements.put("today", todayPlusSeven.toString());
			replacements.put("childName", patient.getChildName());
			String message = template.getTemplate(replacements);
			
			e = new Email();
			e.setTo(Arrays.asList(patient.getEmail_id()));;
			e.setFrom("info@abmss.com");
			e.setHtml(true);
			e.setSubject("NOTIFICATION");
			e.setMessage(message);
			eParams.add(e);	
			mobileNumber.add(patient.getAlt_con_no_1());
			mobileNumber.add(patient.getAlt_con_no_2());
		}
		for (Email email : eParams) {
			
			emailService.send(email);
		}
		smsService.sendSms(mobileNumber);
		System.out.println("Cron complete at "+ new Date());
	}
}
