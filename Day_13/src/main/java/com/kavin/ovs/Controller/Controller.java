package com.kavin.ovs.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kavin.ovs.Entity.OvsEntity;
import com.kavin.ovs.Repository.Repository;



@CrossOrigin("*")
@RestController
@RequestMapping("/Poll")
public class Controller {

    @Autowired
    private Repository ovsRepository;
    @GetMapping(value="/get")
    public Iterable<OvsEntity> getAllOvsEntity(){
        return ovsRepository.findAll();
    }
    	
   
    @PostMapping("/post")
    public OvsEntity createtata(@RequestBody OvsEntity ad) {
        return ovsRepository.save(ad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<OvsEntity>> getById(@PathVariable  Long id){
        Optional<OvsEntity> ac = ovsRepository.findById(id);
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
	public OvsEntity updateGroceryEntityDetails(@RequestBody OvsEntity b,@PathVariable Long id)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		
		b.setid(id);
		return ovsRepository.save(b);		
	}
    @DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable Long id)
	{
    	ovsRepository.deleteById(id);
		return null;
	}
}