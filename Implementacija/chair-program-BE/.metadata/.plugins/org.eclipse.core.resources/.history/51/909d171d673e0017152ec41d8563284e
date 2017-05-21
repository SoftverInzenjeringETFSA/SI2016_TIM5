package ba.actis.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ba.actis.models.User;


public interface UserRepository extends CrudRepository<User, Long> {
	@Query("select o from User o where id=?")
	public User findById( Long id);
}
