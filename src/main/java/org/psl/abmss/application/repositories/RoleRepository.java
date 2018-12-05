package org.psl.abmss.application.repositories;

import java.util.Set;

import org.psl.abmss.application.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {
	Role findByRole(String role);
	
	Set<Role> findAllByRole(String roles[]);
	
}
