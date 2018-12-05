package org.psl.abmss.application.repositories;

import org.psl.abmss.application.entity.TreatmentHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreatmentHistoryRepository extends CrudRepository<TreatmentHistory, Integer> {

}
