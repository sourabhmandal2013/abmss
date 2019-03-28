package org.psl.abmss.application.api;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.psl.abmss.application.dto.LoginDTO;
import org.psl.abmss.application.dto.ResetPasswordDTO;
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
    PasswordEncoder encoder;
    
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
    
    //Login
	@RequestMapping(value="/login", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO loginRequest) {

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

	//GET ROLE
	@RequestMapping(value="/getRoles", method = RequestMethod.GET)
	public List<Role> getRoles(){
		
		List<Role> roles = new ArrayList<Role>();
		try {
			roleRepository.findAll().forEach(roles :: add);
		} catch (Exception e) {
		System.out.println(e.getMessage());
		}
		return roles;
	}
    
	//REGISTER USER
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/registration", method = RequestMethod.POST)
	public ResponseEntity<?> registerUser(@RequestBody SignUpDTO signUpRequest) {
		
		if(userRepository.existsByUserEmail(signUpRequest.getUserEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
        else if(userRepository.existsByUserPhone(Long.valueOf(signUpRequest.getUserPhone()))) {
            return new ResponseEntity(new ApiResponse(false, "Mobile Number is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
        Set<Role> userRole = new HashSet<Role>();
        Role role = new Role();
        role.setRole("ROLE_USER");
        role.setId(5);
        userRole.add(role);
        
        /*Users user = new Users(signUpRequest.getUserName(), passwordEncoder.encode(signUpRequest.getUserPass()),
                signUpRequest.getUserEmail(), Collections.singleton(userRole));*/
        
        String logonId = "ABMSSUSER" + (int)(Math.random()*9999);
        while(userRepository.findByLogonId(logonId).isPresent()) {
        	logonId = new String("ABMSSUSER" + (int)(Math.random()*9999));
//        	logonId = "ABMSSUSER" + (int)(Math.random()*9999);
        }
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
	
	//Recover UserID
	@RequestMapping(value="/recover/logonId")
	public ResponseEntity<Object> recoverUserId(@RequestParam("mobile") String mobileNumber) {
		Optional<Users> user = userRepository.findByUserPhone(Long.valueOf(mobileNumber));
		
		if(user.isPresent()) {
			final String logonIdMessage = "ABMSS : User id :" + user.get().getLogonId();
			smsService.sendSmsWithCustomMessage(Arrays.asList(mobileNumber.trim()), logonIdMessage);
			return  new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	//Reset Password
	@RequestMapping(value="recover/password", method = RequestMethod.POST)
	public ResponseEntity<Object> recoverPassword(
			@RequestBody ResetPasswordDTO reset
			) {
/*		Optional<Users> userByLogonId = userRepository.findByLogonId(reset.getLogonId());
		Optional<Users> userByPhone = userRepository.findByUserPhone(Long.valueOf(reset.getMobileNumber()));
		if(userByLogonId.get().getLogonId().equals(userByPhone.get().getLogonId())) {
			if(userByLogonId.get().getUserPhone().equals(userByPhone.get().getUserPhone())) {
				if(userByLogonId.get().getUserPass().equals(userByPhone.get().getUserPass())) {					
					
					final String updatePasswordMessage = "ABMSS : User id :" + userByLogonId.get().getLogonId() +" Password Reset to :"+ reset.getNewPassword();
					Users user = userByLogonId.get();
					user.setUserPass(reset.getNewPassword());
//					userRepository.updatePasswordForUser(user);
					userRepository.updatePasswordForTheUser(user.getLogonId(),user.getUserPass());
					smsService.sendSmsWithCustomMessage(Arrays.asList(reset.getMobileNumber().toString().trim()), encoder.encode(updatePasswordMessage));
					return  new ResponseEntity<>(HttpStatus.ACCEPTED);
				}
			}
				
		}
*/		
		Users userByLogon = userRepository.findByLogonId(reset.getLogonId()).get();
		if(reset.getMobileNumber().equals(userByLogon.getUserPhone().toString())) {
			userByLogon.setUserPass(encoder.encode(reset.getNewPassword()));
			userRepository.save(userByLogon);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
