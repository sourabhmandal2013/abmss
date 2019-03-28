package org.psl.abmss.application.service;

import java.util.List;
import java.util.Map;

import org.psl.abmss.application.entity.ENT;
import org.psl.abmss.application.entity.Intervention;
import org.psl.abmss.application.entity.Orthodontic;
import org.psl.abmss.application.entity.SpeechTherapy;
import org.psl.abmss.application.entity.TreatmentHistory;

public interface TreatmentHistoryService {
	/*
	 * ALL BY PID
	 */
	public TreatmentHistory getTreatmentHistoryByPatientId(Integer patientId);
	
	/*
	 * 
	 * GET STATS BY PATIENT ID
	 * 
	 */
	public Map<String,Integer> getTreatmentStatsByPatientId(Integer patientId);

	/*
	 * TYPES BY PID
	 */
	public List<Intervention> getSingleIntervention(Integer patientId);

	public List<Intervention> getDoubleIntervention(Integer patientId);

	public List<ENT> getENT(Integer patientId);

	public List<Orthodontic> getORT(Integer patientId);

	public List<SpeechTherapy> getSPT(Integer patientId);
	
	
	/*
	 * SAVE TH
	 */
	
	public boolean addTreatmentHistory(TreatmentHistory treatmentHistory);

	/*
	 * UPDATE TH
	 */
	public TreatmentHistory updateTreatmentHistory(TreatmentHistory treatmentHistory);
	
	/*
	 * DELETE TH
	 */
	public boolean deleteTreatmentHistory(Integer treatmentHistoryId);

	
	/*
	 * 
	 * ALL TH
	 * 
	 */
	public List<TreatmentHistory> getAllTreatmentHistory();
	
	/*
	 * 
	 * ADD TYPES OF TH
	 * 
	 */
	
	public Integer addIntervention(Intervention intervention);
	
	public Integer addEnt(ENT ent);
	
	public Integer addSPT(SpeechTherapy speechTherapy);
	
	public Integer addORT(Orthodontic orthodontic);

	/*
	 * 
	 * UPDATE TYPES OF TH
	 * 
	 */
	

	public Intervention updateIntervention(Intervention intervention);
	
	public ENT updateEnt(ENT ent);
	
	public SpeechTherapy updateSPT(SpeechTherapy speechTherapy);
	
	public Orthodontic updateORT(Orthodontic orthodontic);
	/*
	 * 
	 * DELETE TYPES OF TH
	 * 
	 */
	
	public boolean deleteIntervention(Integer id);
	
	public boolean deleteEnt(Integer id);
	
	public boolean deleteSPT(Integer id);
	
	public boolean deleteORT(Integer id);

	
}
