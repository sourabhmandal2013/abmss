package org.psl.abmss.application.api;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.psl.abmss.application.dto.EmailDTO;
import org.psl.abmss.application.dto.UserDTO;
import org.psl.abmss.application.entity.Email;
import org.psl.abmss.application.service.EmailService;
import org.psl.abmss.application.utility.EmailTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailAPI {
	
	@Autowired
	EmailService emailService;
	
	@RequestMapping(value = "/abmss/sendemail", method = {RequestMethod.POST})
    public boolean sendEmail(@RequestBody EmailDTO dto)
    {
		EmailTemplate template = new EmailTemplate("email_template_1.html");
		
		for (UserDTO user : dto.getUsers()) {
			if(user.isActive() == true)
			{
				Map<String, String> replacements = new HashMap<String, String>();
				replacements.put("user", user.getUserName());
				replacements.put("today", String.valueOf(new Date()));
				String message = template.getTemplate(replacements);
				Email email = new Email(dto.getFrom(), user.getUserEmail(), dto.getFrom(), message);
				email.setHtml(true);
				emailService.send(email);
			}
		}		
		return true;
    }
}
