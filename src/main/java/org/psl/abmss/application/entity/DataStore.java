package org.psl.abmss.application.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FILES_AND_PHOTOS")
public class DataStore {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "FILE_ID")
	private Integer fileId;
	
	@Column(name = "FILE_NAME")
	private String fileName;
	
	@Column(name = "FILE_URL")
	private String fileURL;
	
	@Column(name = "FILE_TYPE")
	private String fileType;

	public Integer getFileId() {
		return fileId;
	}

	public void setFileId(Integer fileId) {
		this.fileId = fileId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileURL() {
		return fileURL;
	}

	public void setFileURL(String fileURL) {
		this.fileURL = fileURL;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}	
}
