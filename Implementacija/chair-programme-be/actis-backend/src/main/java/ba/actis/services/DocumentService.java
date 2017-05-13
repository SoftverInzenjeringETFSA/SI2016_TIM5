package ba.actis.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.actis.models.Document;
import ba.actis.repositories.DocumentRepository;

@Service
public class DocumentService {
	@Autowired
	public DocumentRepository docRepo;
	
	public Iterable<Document> findAll() {
		return docRepo.findAll();
	}
	
	public Document findById(Integer id) {
		return docRepo.findById(id);
	}
}
