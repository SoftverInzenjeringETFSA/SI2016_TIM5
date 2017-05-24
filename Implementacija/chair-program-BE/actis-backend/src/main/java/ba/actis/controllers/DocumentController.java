package ba.actis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.actis.models.Document;
import ba.actis.models.Speaker;
import ba.actis.repositories.DocumentRepository;
import ba.actis.repositories.SpeakerRepository;

@RestController
@RequestMapping("/documents")
public class DocumentController  extends BaseRestController<Document, DocumentRepository>{
	@Autowired
	private DocumentRepository documentRepository;
	
	@CrossOrigin
	@GetMapping(path="/get")
	public @ResponseBody Document getById(@RequestParam("id") Long id) {
		return documentRepository.findById(id);
	}
	
	@CrossOrigin
	@GetMapping(path="/allUserDocs")
	public @ResponseBody List<Document> allUserDocs(@RequestParam("id") Long id) {
		return documentRepository.findAllByUserId(id);
	}
	
	@CrossOrigin
	@GetMapping(path="/allUserRDocs")
	public @ResponseBody List<Document> allUserRDocs(@RequestParam("id") Long id) {
		return documentRepository.findUserReviewed(id);
	}
	
	
}
