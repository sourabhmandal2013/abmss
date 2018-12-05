package org.psl.abmss.application.repositories;

import org.psl.abmss.application.entity.Dashboard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DashboardRepository extends CrudRepository<Dashboard, Integer> {

}
