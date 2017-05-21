package ba.actis.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import ba.actis.models.Document;

public interface DocumentRepository extends CrudRepository<Document, Long> {
	@Query("select d from Document d where id=?")
	public Document findById( Long id);
}
