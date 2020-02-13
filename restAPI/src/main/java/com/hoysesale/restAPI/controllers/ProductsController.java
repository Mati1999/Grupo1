package com.hoysesale.restAPI.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hoysesale.restAPI.entities.Bebida;
import com.hoysesale.restAPI.entities.Categoria;
import com.hoysesale.restAPI.services.IBebidasService;

@RestController
@CrossOrigin
@RequestMapping("/bebidas")
public class ProductsController {
	
	@Autowired
	@Qualifier("BebidaServiceImpl")
	private IBebidasService bebidaService;

	@GetMapping("/listarbebidas")
	public Iterable<Bebida> getBebidas() {
		return bebidaService.getBebidas();
	}
	
	@GetMapping("/listarcategorias")
	public Iterable<Categoria> getCategorias() {
		return bebidaService.getCategorias();
	}
	
}
