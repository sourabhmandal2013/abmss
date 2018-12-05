package org.psl.abmss.application.utility;

import org.psl.abmss.application.dto.InstitutionDTO;
import org.psl.abmss.application.entity.Institution;
import org.springframework.stereotype.Component;

@Component
public class InstitutionConverter {
	public Institution dtoToInstitution(InstitutionDTO dto) {
		
		Institution institution = new Institution();
		
		institution.setCity(dto.getCity());
		institution.setInstitutionAddress(dto.getInstitutionAddress());
		institution.setInstitutionId(dto.getInstitutionId());
		institution.setInstitutionName(dto.getInstitutionName());
		institution.setPhone(dto.getPhone());
		institution.setPointOfContact(dto.getPointOfContact());
		
		return institution;
	}
}
