package com.hoysesale.restAPI.services;

import com.hoysesale.restAPI.entities.Bebida;
import com.hoysesale.restAPI.entities.Categoria;

public interface IBebidasService {
	
	public Iterable<Bebida> getBebidas();
	public Iterable<Categoria> getCategorias();

}
