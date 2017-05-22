package ba.actis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ba.actis.models.Speaker;
import ba.actis.repositories.SpeakerRepository;

public abstract class BaseRestController<M, R extends CrudRepository<M, Long>> {

	protected R repository;

	@Autowired
	public void setRepo(R repository) {
		this.repository = repository;
	}

	@RequestMapping("/all")
	public List<M> all() {
		return (List<M>) repository.findAll();
	}


	/*@RequestMapping("/one")
	public M one(@RequestParam("id") long id) {
		return repository.findOne(id);
	}*/

/*	@RequestMapping("/create")
	public M create(@RequestBody M model) {
		return repository.save(model);
	}

	@RequestMapping("/delete/{id}")
	public void delete(@PathVariable long id) {
		repository.delete(id);
	} */
}
