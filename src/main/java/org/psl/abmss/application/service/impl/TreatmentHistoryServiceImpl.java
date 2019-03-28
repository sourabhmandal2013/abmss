package org.psl.abmss.application.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.psl.abmss.application.repositories.TreatmentHistoryRepository;
import org.psl.abmss.application.service.TreatmentHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TreatmentHistoryServiceImpl implements TreatmentHistoryService {

	@Autowired
	TreatmentHistoryRepository treatmentHistoryRepository;
	
	@Autowired
	InterventionRepository interventionRepository;
	
	@Autowired
	ENTRepository entRepository;
	
	@Autowired
	ORTRepository ortRepository;
	
	@Autowired
	SPTRepository sptRepository;
	
	@Autowired
	TransportationRepository transRepository;
	
	
	@Override
	public TreatmentHistory getTreatmentHistoryByPatientId(Integer patientId) {
		try {
			TreatmentHistory t = treatmentHistoryRepository.findByPatientId(patientId);
			return t;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return new TreatmentHistory();
	}

	@Override
	public List<Intervention> getSingleIntervention(Integer patientId) {
		try {
			List<Intervention> interventions = new ArrayList<Intervention>();
			interventionRepository.findAllByPatientIdAndIntrvType(patientId, 1).forEach(interventions :: add);
			return interventions;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<Intervention> getDoubleIntervention(Integer patientId) {
		try {
			List<Intervention> interventions = new ArrayList<Intervention>();
			interventionRepository.findAllByPatientIdAndIntrvType(patientId, 2).forEach(interventions :: add);
			return interventions;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<ENT> getENT(Integer patientId) {
		try {
			List<ENT> ents = new ArrayList<ENT>();
			entRepository.findAllByPatientId(patientId).forEach(ents :: add);;
			return ents;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
	
	@Override
	public List<Orthodontic> getORT(Integer patientId) {
		try {
			List<Orthodontic> orthodontics = new ArrayList<Orthodontic>();
			ortRepository.findAllByPatientId(patientId).forEach(orthodontics :: add);
			return orthodontics;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<SpeechTherapy> getSPT(Integer patientId) {
		try {
			List<SpeechTherapy> speechTherapies = new ArrayList<SpeechTherapy>();
			sptRepository.findAllByPatientId(patientId).forEach(speechTherapies :: add);;
			return speechTherapies;
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
	@Override
	public boolean addTreatmentHistory(TreatmentHistory treatmentHistory) {
		try {
			treatmentHistoryRepository.save(treatmentHistory);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	@Override
	public TreatmentHistory updateTreatmentHistory(TreatmentHistory treatmentHistory) {
		try {
			treatmentHistoryRepository.save(treatmentHistory);
			
			return treatmentHistoryRepository.findById(treatmentHistory.getPatientId()).get();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public boolean deleteTreatmentHistory(Integer treatmentHistoryId) {
		try {
			treatmentHistoryRepository.deleteById(treatmentHistoryId);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	@Override
	public List<TreatmentHistory> getAllTreatmentHistory() {
		try {
			List<TreatmentHistory> histories = new ArrayList<TreatmentHistory>();
			treatmentHistoryRepository.findAll().forEach(histories :: add);
			return histories;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Integer addIntervention(Intervention intervention) {
		try {
			
			intervention = interventionRepository.save(intervention);
			updateTreatmentOnUpdateOfService(intervention.getPatientId(), intervention.getIntrvType());
			
			return intervention.getIntrvId();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Integer addEnt(ENT ent) {
		try {
			ent = entRepository.save(ent);
			updateTreatmentOnUpdateOfService(ent.getPatientId(), 3);
			return ent.getEntId();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Integer addSPT(SpeechTherapy speechTherapy) {
		try {
			speechTherapy = sptRepository.save(speechTherapy);
			updateTreatmentOnUpdateOfService(speechTherapy.getPatientId(), 4);
			return speechTherapy.getSpeechTherapyId();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Integer addORT(Orthodontic orthodontic) {
		try {
			orthodontic = ortRepository.save(orthodontic);
			updateTreatmentOnUpdateOfService(orthodontic.getPatientId(), 5);
			return orthodontic.getOrthodonticTrtmntId();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Intervention updateIntervention(Intervention intervention) {
		try {
			interventionRepository.save(intervention);
			return interventionRepository.findById(intervention.getIntrvId()).get();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public ENT updateEnt(ENT ent) {
		try {
			entRepository.save(ent);
			return entRepository.findById(ent.getEntId()).get();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public SpeechTherapy updateSPT(SpeechTherapy speechTherapy) {
		try {
			sptRepository.save(speechTherapy);
			return sptRepository.findById(speechTherapy.getSpeechTherapyId()).get();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public Orthodontic updateORT(Orthodontic orthodontic) {
		try {
			ortRepository.save(orthodontic);
			return ortRepository.findById(orthodontic.getOrthodonticTrtmntId()).get();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public boolean deleteIntervention(Integer id) {
		try {
			interventionRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	@Override
	public boolean deleteEnt(Integer id) {
		try {
			interventionRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	@Override
	public boolean deleteSPT(Integer id) {
		try {
			sptRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	@Override
	public boolean deleteORT(Integer id) {
		try {
			ortRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}

	@Override
	public Map<String, Integer> getTreatmentStatsByPatientId(Integer patientId) {
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		try {
			
			TreatmentHistory t = treatmentHistoryRepository.findByPatientId(patientId);
			
			map.put("SI", 0);
			map.put("DI", 0);
			map.put("ENT", 0);
			map.put("SPT", 0);
			map.put("ORT", 0);
			map.put("TRANS", 0);
			//System.out.println(map);
			if(t!=null) {
				map.put("SI", t.getSingleIntervention()!=null?t.getSingleIntervention().size():0);
				map.put("DI", t.getDoubleIntervention()!=null?t.getDoubleIntervention().size():0);
				map.put("ENT", t.getEnt()!=null?t.getEnt().size():0);
				map.put("SPT", t.getSpeechTherapy()!=null?t.getSpeechTherapy().size():0);
				map.put("ORT", t.getOrthodonticTherapy()!=null?t.getOrthodonticTherapy().size():0);
				map.put("TRANS", t.getTransport()!=null?t.getTransport().size():0);
			}
			//System.out.println("After If : "+map);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return map;
	}

	private boolean updateTreatmentOnUpdateOfService(Integer patientId, Integer serviceType) {
		try {

			TreatmentHistory t =  treatmentHistoryRepository.findByPatientId(patientId);
			List <Intervention> interv;
			List <ENT> ent;
			List <SpeechTherapy> spt;
			List <Orthodontic> ort;
			List <Transportation> trans;
			
			
			if(serviceType == 1) {
				interv = new ArrayList<Intervention>();
				interventionRepository.findAllByPatientIdAndIntrvType(patientId, serviceType).forEach(interv :: add);
				t.setSingleIntervention(interv);
			}
			else if(serviceType == 2) {
				interv = new ArrayList<Intervention>();
				interventionRepository.findAllByPatientIdAndIntrvType(patientId, serviceType).forEach(interv :: add);
				t.setDoubleIntervention(interv);
			}
			else if(serviceType == 3) {
				ent = new ArrayList<ENT>();
				entRepository.findAllByPatientId(patientId).forEach(ent :: add);
				t.setEnt(ent);
			}
			else if(serviceType == 4) {
				spt = new ArrayList<SpeechTherapy>();
				sptRepository.findAllByPatientId(patientId).forEach(spt :: add);
				t.setSpeechTherapy(spt);
			}
			else if(serviceType == 5) {
				ort = new ArrayList<Orthodontic>();
				ortRepository.findAllByPatientId(patientId).forEach(ort :: add);
				t.setOrthodonticTherapy(ort);
			}
			else if(serviceType == 6) {
				trans = new ArrayList<Transportation>();
				transRepository.findAllByPatientId(patientId).forEach(trans :: add);
				t.setTransport(trans);
			}
			treatmentHistoryRepository.save(t);
			
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return false;
	}
	
}
