package org.psl.abmss.application.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.psl.abmss.application.entity.Role;
import org.psl.abmss.application.entity.Users;
import org.psl.abmss.application.repositories.RoleRepository;
import org.psl.abmss.application.repositories.UserRepository;
import org.psl.abmss.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	/*@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	*/
	@Override
	public List<Users> getAllUsers() {
		try {
			List<Users> users = new ArrayList<Users>();
			userRepository.findAll().forEach(users :: add);
			return users;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Users getUserById(Integer id) {
		try {
			Users user = userRepository.findById(id).get();
			return user;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Users> getUserByName(String name) {
		try {
			List<Users> users = new ArrayList<Users>();
			userRepository.findAllByUserName(name).forEach(users :: add);
			return users;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	/*@Override
	public List<Users> getUserByRole(String role) {
		try {
			List<Users> users = new ArrayList<Users>();
			userRepository.findAllByUserRoleName(role).forEach(users :: add);
			return users;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}return null;
	}
*/
	/*@Override
	public Users getUserByEmail(String emailId) {
		try {
			return userRepository.findByUserEmail(emailId);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}*/

	@Override
	public boolean addUser(Users user) {
		try {
		user.setUserPass(/*bCryptPasswordEncoder.encode(*/user.getUserPass());//));
        user.setActive(true);
        Role userRole = roleRepository.findByRole("PATIENT");
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		userRepository.save(user);
		return true;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	/*@Override
	public Users updateUser(Users user) {
		try {
			userRepository.save(user);
			return userRepository.findByUserEmail(user.getUserEmail());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}*/

	@Override
	public boolean deleteUser(Integer id) {
		try {
			userRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	@Override
	public Set<Role> getUserRoles(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users getUserByEmail(String emailId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users updateUser(Users user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users getUserByLogonId(String logonId) {
		
		Users user = userRepository.findByLogonId(logonId).get();
		return user;
	}

	@Override
	public Long getUserCount() {
		try {
			return userRepository.count();
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		
		return null;
	}

	/*@Override
	public Set<Role> getUserRoles(String email) {
		try {
			
			Set<Role> roles = new HashSet<Role>();
			Users user = userRepository.findByUserEmail(email);
			roles = user.getRoles();
			return roles;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}return null;
	}*/

}
