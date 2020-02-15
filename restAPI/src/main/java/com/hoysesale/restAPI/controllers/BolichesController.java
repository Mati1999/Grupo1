package com.hoysesale.restAPI.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hoysesale.restAPI.entities.Boliche;
import com.hoysesale.restAPI.services.IBolichesService;

@RestController
@CrossOrigin
@RequestMapping("/boliches")
public class BolichesController {

	@Autowired
	@Qualifier("BolichesServiceImpl")
	private IBolichesService bolichesService;
	
	@GetMapping("/getBoliches")
	public Iterable<Boliche> getBoliches() {
		return bolichesService.getBoliches();
	}
	
}
