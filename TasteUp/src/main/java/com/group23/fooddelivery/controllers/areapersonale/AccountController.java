package com.group23.fooddelivery.controllers.areapersonale;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class AccountController {

	@PostMapping("areapersonale")	
	public String accountInfo() {
		return "profile";
	}

	@PostMapping("password")	
	public String cambioPass() {
		return "cambioPassw";
	}

	@PostMapping("ordini")	
	public String ordiniEffettuati() {
		return "AccountOrder";
	}
	
	@PostMapping("indirizzi")	
	public String getIndirizzi() {
		return "accountAddress";
	}
}
