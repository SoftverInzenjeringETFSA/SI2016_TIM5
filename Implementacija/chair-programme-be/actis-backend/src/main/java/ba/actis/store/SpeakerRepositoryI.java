package ba.actis.store;

import org.springframework.data.repository.CrudRepository;

import ba.actis.beans.Speaker;


public interface SpeakerRepositoryI extends CrudRepository<Speaker, Long>{

}
