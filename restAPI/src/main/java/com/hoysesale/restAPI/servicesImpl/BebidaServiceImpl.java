package com.hoysesale.restAPI.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hoysesale.restAPI.entities.Bebida;
import com.hoysesale.restAPI.repositories.IBebidaRepo;
import com.hoysesale.restAPI.services.IBebidasService;

@Service("BebidaServiceImpl")
public class BebidaServiceImpl implements IBebidasService{

	@Autowired
	private IBebidaRepo bebidaRepo;

	@Override
	public Iterable<Bebida> getBebidas() {
		return bebidaRepo.findAll();
	}

}
