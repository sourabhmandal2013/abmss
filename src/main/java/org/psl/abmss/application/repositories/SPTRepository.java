/**
 * 
 */
package org.psl.abmss.application.repositories;

import java.util.List;

import org.psl.abmss.application.entity.SpeechTherapy;
import org.springframework.data.repository.CrudRepository;

/**
 * @author sourabh_mandal
 *
 */
public interface SPTRepository extends CrudRepository<SpeechTherapy, Integer> {
	public List<SpeechTherapy> findAllByPatientId(Integer id);
}
