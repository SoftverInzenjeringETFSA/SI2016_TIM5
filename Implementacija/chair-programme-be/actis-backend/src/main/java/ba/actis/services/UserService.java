package ba.actis.services;

import ba.actis.models.Role;
import ba.actis.models.User;
import ba.actis.repositories.UserRepository;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository userRepo;

	public Iterable<User> findAll() {
		return userRepo.findAll();
	}

	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepo.findByEmail(email);
		Role role = user.getRoleId();
		String name = role.getRoleName();
		GrantedAuthority a = new SimpleGrantedAuthority(name);
		Set<GrantedAuthority> set = new HashSet<>();
		set.add(a);
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), set);
	}
}
