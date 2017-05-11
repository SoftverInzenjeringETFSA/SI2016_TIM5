package ba.actis.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ba.actis.models.Document;
import ba.actis.services.DocumentService;
import ba.actis.exceptions.EntityNotFoundException;

@RestController
@RequestMapping("/Documents")
public class DocumentsController {
	@Autowired
	private DocumentService documentService;
	
	@RequestMapping("/All")
	public Iterable<Document> getAllDocuments() {
		return documentService.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Document getDocument(@PathVariable("id") Integer id) {
		Document document = documentService.findById(id);
		/*
		if(document == null){
			throw new EntityNotFoundException("Document not found - id: " + id);
		}
		*/
		return document;
	}
}
