package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.Doctor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends CrudRepository<Doctor, Integer>
{
	public List<Doctor> findAllByDocName(String name);
	
	public List<Doctor> findAllByDocCenter(Integer centerId);
}
