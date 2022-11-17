package com.cadastro.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.excption.ResourceNotFoundException;
import com.cadastro.model.entity.AtividadeExtra;
import com.cadastro.repositories.AtividadeExtraRepository;
import com.cadastro.service.AtividadeExtraService;

@Service
public  class AtividadeExtraServiceImpl implements AtividadeExtraService {
	
    @Autowired
	private AtividadeExtraRepository AtividadeExtraRepository;
	
	@Override
	public AtividadeExtra saveAtividadeExtra(AtividadeExtra AtividadeExtra) {
		return AtividadeExtraRepository.save(AtividadeExtra);
	}
	
	@Override
	public List<AtividadeExtra> getAllAtividadeExtra(){
		return   AtividadeExtraRepository.findAll();
	}
	
	@Override
	public  AtividadeExtra getAtividadeExtraById(long id) {
		return  AtividadeExtraRepository.findById(id).orElseThrow(()-> 
		new ResourceNotFoundException(" AtividadeExtra", "id", id));
	}
	
	@Override
	public  AtividadeExtra updateAtividadeExtra( AtividadeExtra  AtividadeExtra, long id) { 
		
    	 AtividadeExtra  AtividadeExistente = new  AtividadeExtra();
		AtividadeExtra.setId( AtividadeExtra.getId());
		AtividadeExtra.setAtividade_cultural(AtividadeExtra.getAtividade_cultural());
		AtividadeExtra.setAtividade_social( AtividadeExtra.getAtividade_social());
		
		
		AtividadeExtraRepository.save(AtividadeExistente);
			return  AtividadeExistente;
		}
    @Override
    public void deleteAtividadeExtra(long id) {
    	AtividadeExtraRepository.findById(id).orElseThrow(() ->
		 new ResourceNotFoundException("AtividadeExtra", "id", id));

    	AtividadeExtraRepository.deleteById(id);
}
}

