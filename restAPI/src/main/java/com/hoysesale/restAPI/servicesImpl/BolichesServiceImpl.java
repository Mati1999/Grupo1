package com.hoysesale.restAPI.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hoysesale.restAPI.entities.Boliche;
import com.hoysesale.restAPI.repositories.IBolicheRepo;
import com.hoysesale.restAPI.services.IBolichesService;

@Service("BolichesServiceImpl")
public class BolichesServiceImpl implements IBolichesService{

	@Autowired
	private IBolicheRepo bolichesRepo;
	
	@Override
	public Iterable<Boliche> getBoliches() {
		return bolichesRepo.findAll();
	}

}
