package org.psl.abmss.application.api;

import java.net.URI;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.psl.abmss.application.dto.AddUserDTO;
import org.psl.abmss.application.dto.SignUpDTO;
import org.psl.abmss.application.entity.Role;
import org.psl.abmss.application.entity.Users;
import org.psl.abmss.application.repositories.RoleRepository;
import org.psl.abmss.application.repositories.UserRepository;
import org.psl.abmss.application.response.ApiResponse;
import org.psl.abmss.application.service.PatientService;
import org.psl.abmss.application.service.UserService;
import org.psl.abmss.application.utility.PatientConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(value = "/abmss/user", method = {RequestMethod.GET})
public class UserAPI {
	
	@Autowired
	PatientConverter patientConverter;
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
    PasswordEncoder passwordEncoder;
	
	@Autowired
    PatientService patientService;
	
	
	
	@RequestMapping(value = "/{userId}", method = {RequestMethod.GET})
    public Users getUserById(@PathVariable(value = "userId") final Integer id)
    {
		return userService.getUserById(id);
    }
	
	@RequestMapping(value = "/{logonId}", method = {RequestMethod.GET})
    public Users getUserByLogonId(@PathVariable(value = "logonId") final String logonId)
    {
		return userService.getUserByLogonId(logonId);
    }
	
	@RequestMapping(value = "/all", method = {RequestMethod.GET})
    public List<Users> getAllUsers()
    {
		return userService.getAllUsers();
    }
	
	
	@RequestMapping(value = "/add", method = {RequestMethod.POST})
    public ResponseEntity<?> addUser(@RequestBody AddUserDTO addUserDTO)
    {

		if(userRepository.existsByUserEmail(addUserDTO.getUserEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
		if(userRepository.existsByUserPhone(addUserDTO.getUserPhone())) {
            return new ResponseEntity(new ApiResponse(false, "Mobile Number is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }
		
		Set<Role> userRole = new HashSet<Role>();
		roleRepository.findAllById(addUserDTO.getRoleId()).forEach(userRole :: add);
        
		String logonId = "ABMSSUSER" + (int)(Math.random()*9999);
		
        Users user = new Users(addUserDTO.getUserName(), passwordEncoder.encode(addUserDTO.getUserPass()),
        		logonId, addUserDTO.getUserPhone(), addUserDTO.getUserEmail(), userRole);
        
        Users result = userRepository.save(user);
        
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("abmss/users/{userId}")
                .buildAndExpand(result.getUserId()).toUri();
		return ResponseEntity.created(location).body(new ApiResponse(true, "'ID' : "+ result.getUserId()));
    }
	
}