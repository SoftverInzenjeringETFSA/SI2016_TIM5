package ba.actis.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ba.actis.models.User;


public interface UserRepository extends CrudRepository<User, Long> {
	@Query("select u from User u where id=? and roleId=2")
	public User findKorisnikById(Long id);
}
