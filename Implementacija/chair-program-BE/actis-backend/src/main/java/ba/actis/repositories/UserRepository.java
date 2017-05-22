package ba.actis.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ba.actis.models.User;


public interface UserRepository extends CrudRepository<User, Long> {
	@Query("select u from User u where id=?")
	public User findKorisnikById(Long id);
	
	@Query("select u from User u where roleId=3")
	public List<User> findReviewers();
}
