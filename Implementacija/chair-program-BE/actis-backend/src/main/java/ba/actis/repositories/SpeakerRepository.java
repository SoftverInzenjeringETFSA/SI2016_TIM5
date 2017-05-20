package ba.actis.repositories;

import org.springframework.data.repository.CrudRepository;

import ba.actis.models.Speaker;

public interface SpeakerRepository extends CrudRepository<Speaker, Long> {

}
