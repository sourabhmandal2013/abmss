package org.psl.abmss.application.api;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.psl.abmss.application.dto.LoginDTO;
import org.psl.abmss.application.dto.SignUpDTO;
import org.psl.abmss.application.entity.Role;
import org.psl.abmss.application.entity.Users;
import org.psl.abmss.application.repositories.RoleRepository;
import org.psl.abmss.application.repositories.UserRepository;
import org.psl.abmss.application.response.ApiResponse;
import org.psl.abmss.application.response.JwtAuthenticationResponse;
import org.psl.abmss.application.security.JwtTokenProvider;
import org.psl.abmss.application.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/")
public class AuthenticationAPI {

	@Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtTokenProvider tokenProvider;
    
    @Autowired
    SmsService smsService;
    
    /*@RequestMapping(value={"/", "/login"}, method = RequestMethod.GET)
	public ModelAndView login(){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("login");
		return modelAndView;
	}
	
	
	@RequestMapping(value="/registration", method = RequestMethod.GET)
	public ModelAndView registration(){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("user", new SignUpDTO());
		modelAndView.setViewName("registration");
		return modelAndView;
	}
    */
	@RequestMapping(value="/login", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDTO loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getLogonId(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

	@RequestMapping(value="/getRoles", method = RequestMethod.GET)
	public List<Role> registration(){
		
		List<Role> roles = new ArrayList<Role>();
		try {
			roleRepository.findAll().forEach(roles :: add);
		} catch (Exception e) {
		System.out.println(e.getMessage());
		}
		return roles;
	}
    
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/registration", method = RequestMethod.POST)
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpDTO signUpRequest) {
        if(userRepository.existsByUserEmail(signUpRequest.getUserEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
        if(userRepository.existsByUserPhone(Long.valueOf(signUpRequest.getUserPhone()))) {
            return new ResponseEntity(new ApiResponse(false, "Mobile Number is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
		

        /*Set<Role> userRole = new HashSet<Role();
        userRole.setRole("ROLE_ADMIN");
        userRole.setId(1);
        */
        Set<Role> userRole = new HashSet<Role>();
        Role adminRole = new Role();
        adminRole.setRole("ROLE_ADMIN");
        adminRole.setId(1);
        userRole.add(adminRole);
        
        /*Users user = new Users(signUpRequest.getUserName(), passwordEncoder.encode(signUpRequest.getUserPass()),
                signUpRequest.getUserEmail(), Collections.singleton(userRole));*/
        
        String logonId = "ABMSSUSER" + (int)(Math.random()*9999);
		
        Users user = new Users(signUpRequest.getUserName(), passwordEncoder.encode(signUpRequest.getUserPass()),
        		logonId, Long.valueOf(signUpRequest.getUserPhone()), signUpRequest.getUserEmail(), userRole);
        
        Users result = userRepository.save(user);

        /*URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("abmss/users/{userId}")
                .buildAndExpand(result.getUserId()).toUri();*/
        
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("abmss/users/{userId}")
                .buildAndExpand(result.getUserId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, logonId));
    
	}
	
	@RequestMapping(value="/recover/userid")
	public ResponseEntity<Object> recoverUserId(@RequestParam("mobile") String mobileNumber) {
		Optional<Users> user = userRepository.findByUserPhone(Long.valueOf(mobileNumber));
		
		if(user.isPresent()) {
			final String logonIdMessage = "ABMSS : User id :" + user.get().getLogonId();
			smsService.sendSmsWithCustomMessage(Arrays.asList(mobileNumber.trim()), logonIdMessage);
			return  new ResponseEntity<>(HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
