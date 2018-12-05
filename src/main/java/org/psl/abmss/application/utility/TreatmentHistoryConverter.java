package org.psl.abmss.application.utility;

import java.util.ArrayList;
import java.util.List;

import org.psl.abmss.application.dto.TreatmentHistoryDTO;
import org.psl.abmss.application.entity.ENT;
import org.psl.abmss.application.entity.Intervention;
import org.psl.abmss.application.entity.Orthodontic;
import org.psl.abmss.application.entity.SpeechTherapy;
import org.psl.abmss.application.entity.Transportation;
import org.psl.abmss.application.entity.TreatmentHistory;
import org.psl.abmss.application.repositories.ENTRepository;
import org.psl.abmss.application.repositories.InterventionRepository;
import org.psl.abmss.application.repositories.ORTRepository;
import org.psl.abmss.application.repositories.SPTRepository;
import org.psl.abmss.application.repositories.TransportationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TreatmentHistoryConverter {

	@Autowired
	TransportationRepository transportationRepository;
	
	@Autowired
	InterventionRepository interventionRepository;
	
	@Autowired
	ENTRepository entRepository;
	
	@Autowired
	ORTRepository ortRepository;

	@Autowired
	SPTRepository sptRepository;
	
	
	/*@Autowired
	TransportationConverter transportationConverter;
	
	@Autowired
	InterventionConverter interventionConverter;
	
	@Autowired
	ENTConverter entConverter;*/
	
public TreatmentHistory dtoToTreatmentHistory(TreatmentHistoryDTO dto) {
		
		TreatmentHistory treatmentHistory = new TreatmentHistory();
		
		treatmentHistory.setDob(dto.getDob());
		treatmentHistory.setFileNo(dto.getFileNo());
		treatmentHistory.setFirstName(dto.getFirstName());
		treatmentHistory.setGender(dto.getGender());
		treatmentHistory.setLastName(dto.getLastName());
		treatmentHistory.setPatientId(dto.getPatientId());
		
		/*List<InterventionDTO> singleInterventionDTO = dto.getDoubleIntervention();
		List<InterventionDTO> doubleInterventionDTO = dto.getDoubleIntervention();
		List<ENTDTO> entDTO = dto.getEnt();
		List<TransportationDTO> transportationDTO = dto.getTransport();*/
		
		List<Intervention> singleInterventions = new ArrayList<Intervention>();
		List<Intervention> doubleInterventions = new ArrayList<Intervention>();
		List<ENT> ents = new ArrayList<ENT>();
		List<Orthodontic> orthodontics = new ArrayList<Orthodontic>();
		List<SpeechTherapy> speechTherapies = new ArrayList<SpeechTherapy>();
		List<Transportation> transportations = new ArrayList<Transportation>();
		
		
		/*for(ENTDTO entDTOObject : entDTO)
		{
			ents.add(entConverter.dtoToENT(entDTOObject));
		}
		for(InterventionDTO intervDTOObject : singleInterventionDTO)
		{
			singleInterventions.add(interventionConverter.dtoToIntervention(intervDTOObject));
		}
		for(InterventionDTO intervDTOObject : doubleInterventionDTO)
		{
			doubleInterventions.add(interventionConverter.dtoToIntervention(intervDTOObject));
		}
		for(TransportationDTO transportationDTOObject : transportationDTO)
		{
			transportations.add(transportationConverter.dtoToTransportation(transportationDTOObject));
		}*/
		
		try {
			interventionRepository.findAllById(dto.getSingleInterventionIds()).forEach(singleInterventions :: add);
			interventionRepository.findAllById(dto.getDoubleInterventionIds()).forEach(doubleInterventions :: add);
			entRepository.findAllById(dto.getEntIds()).forEach(ents :: add);
			transportationRepository.findAllById(dto.getTransportIds()).forEach(transportations :: add);
			ortRepository.findAllById(dto.getOrthodonticTherapyIds()).forEach(orthodontics :: add);
			sptRepository.findAllById(dto.getSpeechTherapyIds()).forEach(speechTherapies :: add);
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		treatmentHistory.setSingleIntervention(singleInterventions);
		treatmentHistory.setDoubleIntervention(doubleInterventions);
		treatmentHistory.setEnt(ents);
		treatmentHistory.setTransport(transportations);
		treatmentHistory.setOrthodonticTherapy(orthodontics);
		treatmentHistory.setSpeechTherapy(speechTherapies);
		return treatmentHistory;
	}
}
