package org.psl.abmss.application.service;

import java.util.List;

public interface SearchService {

	public List<Object> search(String searchString,boolean isPatient,boolean isCenter, boolean isDoctor, boolean isProjectAnimator);
	
}
