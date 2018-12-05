package org.psl.abmss.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class AbmssApplication {

	public static void main(String[] args) {
		SpringApplication.run(AbmssApplication.class, args);
	}
}
