package org.psl.abmss.application;

import java.util.HashSet;
import java.util.Set;

import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.psl.abmss.application.entity.Role;
import org.psl.abmss.application.entity.Users;
import org.psl.abmss.application.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = AbmssApplication.class)
@AutoConfigureMockMvc
@TestPropertySource(locations="classpath:application-integrationtest.properties")
public class AbmssApplicationTests {

	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
    PasswordEncoder passwordEncoder;
	
	final String userName ="testUser";
	final String passwordString = "testpassword";
	final String logonId="testUser";
	final long phoneNumber = 988898889;
	final String emailAddress = "testUser@test.com";
	final Set<Role> roles = new HashSet<>();
	@Before
	public void setup() {
		Users user = new Users(userName, passwordEncoder.encode(passwordString),
        		logonId, phoneNumber, emailAddress, roles);
		userRepository.save(user);
	}
	@Test
	public void mobileNumberDoesNotExistsTest() throws Exception {
		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/recover/userid?mobile=900000000")).andReturn();
		//MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/getRoles")).andReturn();
		Assert.assertEquals(mvcResult.getResponse().getStatus(), HttpStatus.NOT_FOUND);
		//System.out.println(mvcResult.getResponse());
	}

	
	@Test
	public void mobileNumberDoesExistsTest() throws Exception {
		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/recover/userid?mobile=988898889")).andReturn();
		//MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/getRoles")).andReturn();
		Assert.assertEquals(mvcResult.getResponse().getStatus(), HttpStatus.ACCEPTED);
		//System.out.println(mvcResult.getResponse());
	}
}