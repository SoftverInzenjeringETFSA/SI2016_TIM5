package ba.actis.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.actis.models.Role;
import ba.actis.repositories.RoleRepository;

@RestController
@RequestMapping("/roles")
public class RoleController extends BaseRestController<Role, RoleRepository>{

	@Autowired
	private RoleRepository roleRepository;

	
	@CrossOrigin
	@GetMapping(path="/get")
	public @ResponseBody Role getById(@RequestParam("id") Long id) {
		return roleRepository.findById(id);
	}
}
