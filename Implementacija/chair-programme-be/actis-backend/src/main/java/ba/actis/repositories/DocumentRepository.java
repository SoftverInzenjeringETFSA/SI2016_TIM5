package ba.actis.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import ba.actis.models.Document;

public interface DocumentRepository extends Repository<Document, Integer> {
	long count();

	boolean exists(Integer primaryKey);

	@Query("SELECT d FROM Document")
	Iterable<Document> findAll();

	@Query("SELECT d FROM Document WHERE ID = :id")
	Document findById(@Param("id") Integer id);
}
