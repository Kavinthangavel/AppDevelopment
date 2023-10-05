package com.kavin.ovs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kavin.ovs.Entity.OvsEntity;

public interface Repository extends JpaRepository<OvsEntity,Long> {

	

}