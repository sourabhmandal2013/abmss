/**
 * 
 */
package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.Orthodontic;
import org.springframework.data.repository.CrudRepository;

/**
 * @author sourabh_mandal
 *
 */
public interface ORTRepository extends CrudRepository<Orthodontic, Integer> {
	public List<Orthodontic> findAllByPatientId(Integer id);
}
