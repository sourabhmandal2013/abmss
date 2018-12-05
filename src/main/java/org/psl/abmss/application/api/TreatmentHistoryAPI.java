package org.psl.abmss.application.api;

import java.util.List;

import org.psl.abmss.application.dto.ENTDTO;
import org.psl.abmss.application.dto.InterventionDTO;
import org.psl.abmss.application.dto.ORTDTO;
import org.psl.abmss.application.dto.SPTDTO;
import org.psl.abmss.application.dto.TreatmentHistoryDTO;
import org.psl.abmss.application.entity.ENT;
import org.psl.abmss.application.entity.Intervention;
import org.psl.abmss.application.entity.Orthodontic;
import org.psl.abmss.application.entity.SpeechTherapy;
import org.psl.abmss.application.entity.TreatmentHistory;
import org.psl.abmss.application.service.TreatmentHistoryService;
import org.psl.abmss.application.utility.ENTConverter;
import org.psl.abmss.application.utility.InterventionConverter;
import org.psl.abmss.application.utility.ORTConverter;
import org.psl.abmss.application.utility.SPTConverter;
import org.psl.abmss.application.utility.TreatmentHistoryConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abmss/treatment")
public class TreatmentHistoryAPI {
	@Autowired
	private TreatmentHistoryService historyService;

	@Autowired
	private TreatmentHistoryConverter historyConverter;
	
	@Autowired
	private InterventionConverter interventionConverter;
	
	@Autowired
	private ENTConverter entConverter;
	
	@Autowired
	private ORTConverter ortConverter;
	
	@Autowired
	private SPTConverter sptConverter;
	
	
	@RequestMapping(value = "/{patientId}", method = {RequestMethod.GET})
    public TreatmentHistory getTreatmentByPatientId(@PathVariable(value = "patientId") final Integer id)
    {
		return historyService.getTreatmentHistoryByPatientId(id);
    }
	
	@RequestMapping(value = "/single/{patientId}", method = {RequestMethod.GET})
    public List<Intervention> getAllSingleInterventionTreatmentHistory(
    		@PathVariable(value = "patientId") final Integer id
    		)
    {
		return historyService.getSingleIntervention(id);
    }
	
	@RequestMapping(value = "/double/{patientId}", method = {RequestMethod.GET})
    public List<Intervention> getAllDoubleInterventionTreatmentHistory(
    		@PathVariable(value = "patientId") final Integer id
    		)
    {
		return historyService.getDoubleIntervention(id);
    }
	
	@RequestMapping(value = "/ent/{patientId}", method = {RequestMethod.GET})
    public List<ENT> getAllENTTreatmentHistory(
    		@PathVariable(value = "patientId") final Integer id
    		)
    {
		return historyService.getENT(id);
    }
	@RequestMapping(value = "/ort/{patientId}", method = {RequestMethod.GET})
    public List<Orthodontic> getAllOrthodonticTreatmentHistory(
    		@PathVariable(value = "patientId") final Integer id
    		)
    {
		return historyService.getORT(id);
    }
	@RequestMapping(value = "/spt/{patientId}", method = {RequestMethod.GET})
    public List<SpeechTherapy> getAllSpeechTherapiesTreatmentHistory(
    		@PathVariable(value = "patientId") final Integer id
    		)
    {
		return historyService.getSPT(id);
    }
	///////////////////////////////////////////////////////////////////////////////////////////
	//ADD-POST
	///////////////////////////////////////////////////////////////////////////////////////////
	@RequestMapping(value = "/single", method = {RequestMethod.POST})
    public Integer addAllSingleInterventionTreatmentHistory(
    		@RequestBody InterventionDTO interventionDTO
    		)
    {
		return historyService.addIntervention(interventionConverter.dtoToIntervention(interventionDTO));
    }
	
	@RequestMapping(value = "/double", method = {RequestMethod.POST})
    public Integer addAllDoubleInterventionTreatmentHistory(
    		@RequestBody InterventionDTO interventionDTO
    		)
    {
		return historyService.addIntervention(interventionConverter.dtoToIntervention(interventionDTO));
    }
	
	@RequestMapping(value = "/ent", method = {RequestMethod.POST})
    public Integer addAllENTTreatmentHistory(
    		@RequestBody ENTDTO entDTO
    		)
    {
		return historyService.addEnt(entConverter.dtoToENT(entDTO));
    }
	@RequestMapping(value = "/ort", method = {RequestMethod.POST})
    public Integer addAllOrthodonticTreatmentHistory(
    		@RequestBody ORTDTO ortdto
    		)
    {
		return historyService.addORT(ortConverter.dtoToORT(ortdto));

    }
	@RequestMapping(value = "/spt", method = {RequestMethod.POST})
    public Integer addAllSpeechTherapiesTreatmentHistory(
    		@RequestBody SPTDTO sptdto
    		)
    {
		return historyService.addSPT(sptConverter.dtoToSPT(sptdto));
    }
	
	///////////////////////////////////////////////////////////////////////////////////////////
	@RequestMapping(value = "/single/{intervId}", method = {RequestMethod.PUT})
    public Intervention updateSingleInterventionTreatmentHistory(
    		@PathVariable(value = "intervId") final Integer id,
    		@RequestBody InterventionDTO interventionDTO
    		)
    {
		interventionDTO.setIntrvId(id);
		return historyService.updateIntervention(interventionConverter.dtoToIntervention(interventionDTO));
    }
	
	@RequestMapping(value = "/double/{intervId}", method = {RequestMethod.PUT})
    public Intervention updateDoubleInterventionTreatmentHistory(
    		@PathVariable(value = "intervId") final Integer id,
    		@RequestBody InterventionDTO interventionDTO
    		)
    {
		interventionDTO.setIntrvId(id);
		return historyService.updateIntervention(interventionConverter.dtoToIntervention(interventionDTO));
    }
	
	@RequestMapping(value = "/ent/{entId}", method = {RequestMethod.PUT})
    public ENT updateENTTreatmentHistory(
    		@PathVariable(value = "entId") final Integer id,
    		@RequestBody ENTDTO entDTO
    		)
    {
		entDTO.setEntId(id);
		return historyService.updateEnt(entConverter.dtoToENT(entDTO));
    }
	@RequestMapping(value = "/ort/{ortId}", method = {RequestMethod.PUT})
    public Orthodontic updateOrthodonticTreatmentHistory(
    		@PathVariable(value = "ortId") final Integer id,
    		@RequestBody ORTDTO ortdto
    		)
    {
		ortdto.setOrthodonticTrtmntId(id);
		return historyService.updateORT(ortConverter.dtoToORT(ortdto));

    }
	@RequestMapping(value = "/spt/{sptId}", method = {RequestMethod.PUT})
    public SpeechTherapy addSpeechTherapiesTreatmentHistory(
    		@PathVariable(value = "sptId") final Integer id,
    		@RequestBody SPTDTO sptdto
    		)
    {
		sptdto.setSpeechTherapyId(id);
		return historyService.updateSPT(sptConverter.dtoToSPT(sptdto));
    }
	///////////////////////////////////////////////////////////////////////////////////////////
	
	@RequestMapping(value = "/single/{intervId}", method = {RequestMethod.DELETE})
    public boolean deleteSingleInterventionTreatmentHistory(
    		@PathVariable(value = "intervId") final Integer id
    		)
    {
		return historyService.deleteIntervention(id);
    }
	
	@RequestMapping(value = "/double/{intervId}", method = {RequestMethod.DELETE})
    public boolean deleteDoubleInterventionTreatmentHistory(
    		@PathVariable(value = "intervId") final Integer id
    		)
    {
		return historyService.deleteIntervention(id);
    }
	
	@RequestMapping(value = "/ent/{entId}", method = {RequestMethod.DELETE})
    public boolean deleteENTTreatmentHistory(
    		@PathVariable(value = "entId") final Integer id
    		)
    {
		return historyService.deleteEnt(id);
    }
	@RequestMapping(value = "/ort/{ortId}", method = {RequestMethod.DELETE})
    public boolean deleteOrthodonticTreatmentHistory(
    		@PathVariable(value = "ortId") final Integer id
    		)
    {
		return historyService.deleteORT(id) ;
    }
	@RequestMapping(value = "/spt/{sptId}", method = {RequestMethod.DELETE})
    public boolean deleteSpeechTherapiesTreatmentHistory(
    		@PathVariable(value = "sptId") final Integer id
    		)
    {
		return historyService.deleteSPT(id);
    }
	
	//////////////////////////////////////////////////////////////////////////////////////////
	
	@RequestMapping(value = "/{treatmentHistoryId}", method = {RequestMethod.DELETE})
    public boolean deleteTreatmentHistoryById(@PathVariable(value = "treatmentHistoryId") final Integer id)
    {
		return historyService.deleteTreatmentHistory(id);
    }
	
	@RequestMapping(value = "/{treatmentHistoryId}", method = {RequestMethod.PUT})
    public TreatmentHistory updateTreatmentHistoryById(
    		@PathVariable(value = "treatmentHistoryId") final Integer id,
    		@RequestBody TreatmentHistoryDTO treatmentHistoryDTO)
    {
		TreatmentHistory treatmentHistory = historyConverter.dtoToTreatmentHistory(treatmentHistoryDTO);
		return historyService.updateTreatmentHistory(treatmentHistory);
    }
	

	@RequestMapping(value = "/add", method = {RequestMethod.POST})
    public boolean addChildTreatmentHistory(
    		@RequestBody TreatmentHistoryDTO treatmentHistoryDTO)
    {
		TreatmentHistory treatmentHistory = historyConverter.dtoToTreatmentHistory(treatmentHistoryDTO);
		return historyService.addTreatmentHistory(treatmentHistory);
    }
}
