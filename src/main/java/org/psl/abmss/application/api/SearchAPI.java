package org.psl.abmss.application.api;

import org.psl.abmss.application.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abmss/search")
public class SearchAPI {
	
	@Autowired
	SearchService searchService;
	
	@RequestMapping(value = "/{searchString}", method = {RequestMethod.GET})
    public ResponseEntity<?> search(
    		@PathVariable(value = "searchString") final String searchString,
    		@RequestParam("patient") boolean isPatient,
    		@RequestParam("center") boolean isCenter,
    		@RequestParam("doctor") boolean isDoctor,
    		@RequestParam("projectAnimator") boolean isProjectAnimator
    		)
    {
		return ResponseEntity.ok(searchService.search(searchString, isPatient, isCenter, isDoctor, isProjectAnimator));			
    }
}
