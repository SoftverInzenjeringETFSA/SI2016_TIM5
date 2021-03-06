package ba.actis.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ba.actis.models.User;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<User, Long> {
	@Query("select u from User u where id=?")
	public User findKorisnikById(Long id);
	
	@Query("select u from User u where roleId=3")
	public List<User> findReviewers();
	
	@Query("select u from User u where email=? and password=?")
	public User findByUsernameAndPassword(String email, String password);
	
	@Query("select u from User u where first_name LIKE %:name% or last_name LIKE %:name%")
	public List<User> findByName(@Param("name")String name);
	
	@Modifying(clearAutomatically = true)
	@Query("update User u set u.password=? where u.id=?")
	public Integer resetPassword(String password, Long id);
}
