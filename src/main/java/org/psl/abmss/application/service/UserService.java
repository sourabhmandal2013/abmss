package org.psl.abmss.application.service;

import java.util.List;
import java.util.Set;

import org.psl.abmss.application.entity.Role;
import org.psl.abmss.application.entity.Users;

public interface UserService {

	public List<Users> getAllUsers();
	
	public Users getUserById(Integer id);
	
	public List<Users> getUserByName(String name);
	
	public Users getUserByLogonId(String logonId);
	
	public Set<Role> getUserRoles(String email);
	
//	public List<Users> getUserByRole(String role);

	public Users getUserByEmail(String emailId);
	
	public boolean addUser(Users user);
	
	public Users updateUser(Users user);
	
	public boolean deleteUser(Integer id);

}
