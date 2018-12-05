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
	
	public Optional<Users> findByUserPhone(Long userPhone);
}
