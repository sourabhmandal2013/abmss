package org.psl.abmss.application.utility;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;

public class EmailTemplate {

	private String templateId;
	 
	private String template;
 
	private Map<String, String> replacementParams;
	
	public EmailTemplate(String templateId) {
		this.templateId = templateId;
		try {
			this.template = loadTemplate(templateId);
		} catch (Exception e) {
			this.template = EmailConstants.BLANK;
		}
	}
 
	private String loadTemplate(String templateId) throws Exception {
		ClassLoader classLoader = getClass().getClassLoader();
		File file = new File(classLoader.getResource("email-templates/" + templateId).getFile());
		String content = EmailConstants.BLANK;
		try {
			content = new String(Files.readAllBytes(file.toPath()));
		} catch (IOException e) {
			throw new Exception("Could not read template with ID = " + templateId);
		}
		return content;
	}
 
	public String getTemplate(Map<String, String> replacements) {
		String cTemplate = this.getTemplate();
 
		if (!AppUtil.isObjectEmpty(cTemplate)) {
			for (Map.Entry<String, String> entry : replacements.entrySet()) {
				cTemplate = cTemplate.replace("{{" + entry.getKey() + "}}", entry.getValue());
			}
		}
		
		return cTemplate;
	}

	public String getTemplateId() {
		return templateId;
	}

	public void setTemplateId(String templateId) {
		this.templateId = templateId;
	}

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

	public Map<String, String> getReplacementParams() {
		return replacementParams;
	}

	public void setReplacementParams(Map<String, String> replacementParams) {
		this.replacementParams = replacementParams;
	}
}
