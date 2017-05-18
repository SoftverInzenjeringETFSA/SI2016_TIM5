package ba.actis.store;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import ba.actis.models.Speaker;


@Repository
public class SpeakerRepository {

	  private static List<Speaker> speakers = new ArrayList<>(3);

	  static {
	    speakers.add(new Speaker(1, "Edsger",  "Dijkstra", "bla bla", "www.google.com", "info", "link"));
	    speakers.add(new Speaker(2, "A",  "Dijkstra", "bla bla", "www.google.com", "info", "link"));
	    speakers.add(new Speaker(3, "B",  "Dijkstra", "bla bla", "www.google.com", "info", "link"));
	  }

	  public Speaker findById(int id) {
	    for (Speaker c : speakers) {
	      if (c.getId() == id) {
	        return c;
	      }
	    }
	    return null;
	  }
}
