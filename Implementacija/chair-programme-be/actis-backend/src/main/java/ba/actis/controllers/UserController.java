package ba.actis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ba.actis.models.Role;
import ba.actis.models.User;
import ba.actis.repositories.UserRepository;
import ba.actis.services.SecurityService;
import ba.actis.services.UserService;
import ba.actis.services.UserServiceInterface;
import ba.actis.validator.UserValidation;

@RestController
@RequestMapping(path = "/Users")
public class UserController {
	@Autowired
	private UserService userService;

	@RequestMapping("/All")
	public Iterable<User> getAllUsers() {
		return userService.findAll();
	}

	// prosljedjuje se email
	@RequestMapping(value = "/{email}", method = RequestMethod.GET)
	public User getUser(@PathVariable("email") String email) {
		User user = userService.findByEmail(email);
		return user;
		// TODO : provjeriti da li je user null
	}

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserServiceInterface IuserService;

	@Autowired
	private SecurityService securityService;

	@Autowired
	private UserValidation userValidation;

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String registration(Model model) {
		model.addAttribute("userForm", new User());
		return "register";
	}

	@RequestMapping(value = "/registration", method = RequestMethod.POST)
	public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult, Model model) {
		userValidation.validate(userForm, bindingResult);

		if (bindingResult.hasErrors()) {
			return "register";
		}

		IuserService.save(userForm);

		securityService.autologin(userForm.getEmail(), userForm.getPassword());

		return "redirect:/index";
	}

	// Ovo dole smo prvobitno radili
	/*
	 * @RequestMapping(value = "/register", method = RequestMethod.POST) public
	 * ResponseEntity registerUser(@RequestBody User user) {
	 * userRepository.save(user); return new
	 * ResponseEntity<>(HttpStatus.NO_CONTENT);
	 * 
	 * return ResponseEntity.status(HttpStatus.OK)
	 * .body(userService.registerKorisnik(user));
	 * 
	 * 
	 * }
	 */

}
