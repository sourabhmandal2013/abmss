package org.psl.abmss.application.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.List;

import org.psl.abmss.application.service.SmsService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsServiceImpl implements SmsService{

	@Value("${app.sms.authkey}")
	private String authkey;
	
	@Value("${app.sms.senderId}")
	private String senderId;

	@Value("${app.sms.route}")
	private String route;

	@Value("${app.sms.mainUrl}")
	private String mainUrl;
	
	@Value("${app.sms.message}")
	private String message;
	
	@Override
	public String sendSms(List<String> mobileNo) {
        URLConnection myURLConnection=null;
        URL myURL=null;
        BufferedReader reader=null;
        String encoded_message=URLEncoder.encode(message);
        String mobiles = mobileNo.toString();
        mobiles = mobiles.replaceAll("\\[", "");
		mobiles = mobiles.replaceAll("\\]", "");
        StringBuilder sbPostData= new StringBuilder(mainUrl);
        sbPostData.append("authkey="+authkey);
        sbPostData.append("&mobiles="+mobiles);
        sbPostData.append("&message="+encoded_message);
        sbPostData.append("&route="+route);
        sbPostData.append("&sender="+senderId);

        mainUrl = sbPostData.toString();
        try
        {
            myURL = new URL(mainUrl);
            myURLConnection = myURL.openConnection();
            myURLConnection.connect();
            reader= new BufferedReader(new InputStreamReader(myURLConnection.getInputStream()));
            String response;
            String responseToApi = "";
            while ((response = reader.readLine()) != null)
            	responseToApi = responseToApi + response;
            reader.close();
            return responseToApi;
        }
        catch (IOException e)
        {
                e.printStackTrace();
        }
        return "FAILED";
	}

	@Override
	public String sendSmsWithCustomMessage(List<String> mobileNo, String message) {
		
		String mobiles = mobileNo.toString();
		
		mobiles = mobiles.replaceAll("\\[", "");
		mobiles = mobiles.replaceAll("\\]", "");
        URLConnection myURLConnection=null;
        URL myURL=null;
        BufferedReader reader=null;
        String encoded_message=URLEncoder.encode(message);
        StringBuilder sbPostData= new StringBuilder(mainUrl);
        sbPostData.append("authkey="+authkey);
        sbPostData.append("&mobiles="+mobiles);
        sbPostData.append("&message="+encoded_message);
        sbPostData.append("&route="+route);
        sbPostData.append("&sender="+senderId);

        mainUrl = sbPostData.toString();
        
        System.out.println(mainUrl);
        try
        {
            myURL = new URL(mainUrl);
            myURLConnection = myURL.openConnection();
            myURLConnection.connect();
            reader= new BufferedReader(new InputStreamReader(myURLConnection.getInputStream()));
            String response;
            String responseToApi = "";
            while ((response = reader.readLine()) != null)
            	responseToApi = responseToApi + response;
            reader.close();
            return responseToApi;
        }
        catch (IOException e)
        {
                e.printStackTrace();
        }
        return "FAILED";
	}

}
