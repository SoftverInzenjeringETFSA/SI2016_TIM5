package ba.actis.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ba.actis.models.Document;

public interface DocumentRepository extends CrudRepository<Document, Long> {
	@Query("select d from Document d where id=?")
	public Document findById( Long id);
	
	@Query("select d from Document d where user_id=?")
	public List<Document> findAllByUserId( Long id);
	
	@Query("select d from Document d where user_id=? and reviewer_id is not NULL")
	public List<Document> findUserReviewed( Long id);
}
