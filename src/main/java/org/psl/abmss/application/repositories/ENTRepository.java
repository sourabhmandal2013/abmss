package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.ENT;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ENTRepository extends CrudRepository<ENT, Integer> {

	public List<ENT> findAllByPatientId(Integer id);
}
