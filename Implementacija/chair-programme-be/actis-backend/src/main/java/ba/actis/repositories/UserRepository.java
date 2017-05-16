package ba.actis.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import ba.actis.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

	/*
	 * @Query ("Select u FROM User where email= :email") public User
	 * findByEmail(@Param("email") String email);
	 * 
	 * @Query ("Select u FROM User") public List<User> findAll(); long count();
	 * boolean exists (Integer primaryKey);
	 * 
	 * @Query
	 * ("INSERT into User VALUES (:firstName, :lastName, :email, :pass, :role, '"
	 * )
	 */
	public User findByEmail(String email);

	public List<User> findAll();
}
