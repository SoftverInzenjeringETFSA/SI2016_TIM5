package ba.actis.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.actis.models.User;
import ba.actis.repositories.UserRepository;

@Service
public class AuthService {
	@Autowired
	private UserRepository userRepository;
	
	public User checkLoginData(String email, String password){
        return userRepository.findByUsernameAndPassword(email, password);
    }
	

}
