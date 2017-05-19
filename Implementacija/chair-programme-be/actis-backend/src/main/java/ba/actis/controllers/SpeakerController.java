package ba.actis.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ba.actis.assembler.SpeakerResourceAssembler;
import ba.actis.beans.Speaker;
import ba.actis.exceptions.EntityNotFoundException;
import ba.actis.store.SpeakerRepository;
import ba.actis.store.SpeakerRepositoryI;


@RestController
@RequestMapping("/speakers")
public class SpeakerController extends MainController<Speaker, SpeakerRepositoryI>{

	  private final SpeakerRepository speakerRepository;
	  private final SpeakerResourceAssembler speakerResourceAssembler;

	   @Autowired
	  public SpeakerController(SpeakerResourceAssembler speakerResourceAssembler, SpeakerRepository repository) {
	    this.speakerResourceAssembler = speakerResourceAssembler;
	    this.speakerRepository = repository;
	  }
	   
	  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	  ResponseEntity<Resource<Speaker>> getSpeaker(@PathVariable("id") Integer id) {
		 Speaker speaker = speakerRepository.findById(id);
		 if (speaker == null) throw new EntityNotFoundException("Speaker not found - id: " + id);
		 
		 Resource<Speaker> resource = speakerResourceAssembler.toResource(speaker);
		 return ResponseEntity.ok(resource);

	  }
	  
	
}
