package ba.actis.services;

import ba.actis.models.User;

public interface UserServiceInterface {
	void save(User user);

	User findByUsername(String username);
}