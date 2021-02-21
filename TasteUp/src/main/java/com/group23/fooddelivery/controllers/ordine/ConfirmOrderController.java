package com.group23.fooddelivery.controllers.ordine;

import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpSession;
import com.group23.fooddelivery.model.user.Indirizzo;
import com.group23.fooddelivery.persistence.DBManager;
import com.group23.fooddelivery.persistence.dao.IndirizzoDAO;
import com.group23.fooddelivery.persistence.dao.jdbc.IndirizzoDAOJDBC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ConfirmOrderController {

	@PostMapping("ordineConfermato")
	public String goToSuccessPage(HttpSession session) throws SQLException {
		IndirizzoDAO indirizzidao = new  IndirizzoDAOJDBC(DBManager.getDataSource());
		List<Indirizzo> list = indirizzidao.getIndirizzi(session.getAttribute("usernameLogged").toString());
		
		if(list.size() == 0)
		return "errorOrder";
		else
		return "successOrder";
	}
	
}
