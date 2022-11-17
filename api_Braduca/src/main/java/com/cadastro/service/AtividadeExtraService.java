package com.cadastro.service;

import java.util.List;

import com.cadastro.model.entity.AtividadeExtra;

public interface AtividadeExtraService {
	
	AtividadeExtra saveAtividadeExtra(AtividadeExtra AtividadeExtra);
	List <AtividadeExtra> getAllAtividadeExtra();
	AtividadeExtra getAtividadeExtraById(long id);
	AtividadeExtra updateAtividadeExtra(AtividadeExtra AtividadeExtra, long id);
	void deleteAtividadeExtra(long id);
	

}
