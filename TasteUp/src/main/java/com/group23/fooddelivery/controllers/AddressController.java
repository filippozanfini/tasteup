package com.group23.fooddelivery.controllers;

import java.sql.SQLException;


import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.group23.fooddelivery.persistence.DBManager;
import com.group23.fooddelivery.persistence.DBSource;
import com.group23.fooddelivery.persistence.dao.jdbc.IndirizzoDAOJDBC;

@RestController
public class AddressController {
	
	Gson gson = new Gson();
	
	@PostMapping("rimuoviIndirizzo")
	public boolean rimuoviIndirizzo(@RequestParam String username,@RequestParam String indirizzo,@RequestParam Integer cap,HttpSession session) {
	System.out.println(username );

		DBSource Dbs = DBManager.getDataSource();
		String user = (String) session.getAttribute("usernameLogged");
		try {
			IndirizzoDAOJDBC indirizzoDB = new IndirizzoDAOJDBC(Dbs);
			return indirizzoDB.remove(user, indirizzo, cap);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
}
