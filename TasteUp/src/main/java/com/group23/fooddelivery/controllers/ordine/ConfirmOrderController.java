package com.group23.fooddelivery.controllers.ordine;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ConfirmOrderController {
	
	@PostMapping("ordineConfermato")
	public String goToSuccessPage() {
		return "successOrder";
	}
	
}
