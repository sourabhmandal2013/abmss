package org.psl.abmss.application.batch;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {
	
	private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
	
	@Autowired
	ScheduledServices scheduledServices;
	//0 8 * * * everyday at 8 am
	//10 1 * * *
//	@Scheduled(cron = "19 1 * * * ?")
//	@Scheduled(cron = "30 1 * * * ?")
//	
	
	@Scheduled(cron = "0 0 8 * * ?")
	public void scheduleTaskWithCronExpression() {
	    System.out.println("Cron Task :: Execution Time - {}" + dateTimeFormatter.format(LocalDateTime.now()));
	    scheduledServices.sendEmailAndSmsCron();
	}

}
