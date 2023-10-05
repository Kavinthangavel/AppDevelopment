package com.kavin.ovs.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kavin.ovs.Entity.OvsEntity;
import com.kavin.ovs.Repository.Repository;

@Service
public class OvsService {

	@Autowired
	Repository ovsRepository;
	
	public List<OvsEntity> getAllOvsEntity() {
		return ovsRepository.findAll();
	}
	
	public OvsEntity getovsEntityById(Long ovsEntityId) {
		Optional<OvsEntity> ovsEntityOptional = ovsRepository.findById(ovsEntityId);
		return ovsEntityOptional.orElse(null);
	}
	
	public OvsEntity saveovsEntity(OvsEntity ovsEntity) {
		return ovsRepository.save(ovsEntity);
	}
	
	public void deleteovsEntity(Long ovsEntityId) {
		ovsRepository.deleteById(ovsEntityId);
	}
}