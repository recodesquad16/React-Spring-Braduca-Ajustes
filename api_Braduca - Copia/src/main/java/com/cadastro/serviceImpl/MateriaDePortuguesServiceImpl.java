package com.cadastro.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.excption.ResourceNotFoundException;
import com.cadastro.model.entity.MateriaDePortugues;
import com.cadastro.repositories.MateriaDePortuguesRepository;
import com.cadastro.service.MateriaDePortuguesService;

@Service
public  class MateriaDePortuguesServiceImpl  implements MateriaDePortuguesService{
	
	
	@Autowired
	private  MateriaDePortuguesRepository  MateriaDePortuguesRepository ;
	
	
	@Override
	public MateriaDePortugues saveMateriaDePortugues(MateriaDePortugues MateriaDePortugues) {
		return MateriaDePortuguesRepository.save(MateriaDePortugues);
		
	}
	
    @Override
    public List<MateriaDePortugues> getAllMateriaDePortugues() {
		return MateriaDePortuguesRepository.findAll();
	}
    @Override
    public MateriaDePortugues getMateriaDePortuguesById(long id) {
		return MateriaDePortuguesRepository.findById(id).orElseThrow(()-> 
		new ResourceNotFoundException("MateriaDePortugues", "id", id));
	}
  
   @Override
    public MateriaDePortugues  updateMateriaDePortugues ( MateriaDePortugues   MateriaDePortugues , long id) { 
		
    	MateriaDePortugues MateriaDePortuguesExistente =  MateriaDePortuguesRepository.findById(id).orElseThrow(() ->
		 new ResourceNotFoundException("MateriaDePortugues", "id", id));
			
    	MateriaDePortuguesExistente.setId( MateriaDePortugues.getId());
    	MateriaDePortuguesExistente.setVideos( MateriaDePortugues.getVideos());
    	MateriaDePortuguesExistente.setLeitura( MateriaDePortugues.getLeitura());
		
    	MateriaDePortuguesRepository.save( MateriaDePortuguesExistente);
		return  MateriaDePortuguesExistente;
	}
    @Override
	public void deleteMateriaDePortugues (long id) {
    	 MateriaDePortuguesRepository.findById(id).orElseThrow(() ->
		 new ResourceNotFoundException(" MateriaDePortugues", "id", id));

    	 MateriaDePortuguesRepository.deleteById(id);
}

	
}
		
