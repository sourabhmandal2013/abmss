package org.psl.abmss.application.repositories;

import java.util.List;
import java.util.Optional;

import org.psl.abmss.application.entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {

	public Optional<Users> findByUserEmail(String email);
	
	public List<Users> findAllByUserName(String name);
	
	public Optional<Users> findByLogonId(String logonId);
	
	public Optional<Users> findByUserId(Integer id);
	   
	public boolean existsByUserEmail(String userEmail);
	
	public boolean existsByUserPhone(Long userPhone);

	@SuppressWarnings("unchecked")
	public Users save(Users user);

//	public Users save(Users user);
	
	/*@Modifying
	@Query("update all_users u set u.user_password = :password where u.logon_id = :logonId and u.user_phone = :user_phone " )
	void updatePasswordForTheUser(String logonId, String password, String user_phone);*/
	
	public Optional<Users> findByUserPhone(Long userPhone);

}
