package ba.actis.assembler;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;
import org.springframework.stereotype.Component;

import ba.actis.beans.Speaker;

@Component
public class SpeakerResourceAssembler implements ResourceAssembler<Speaker, Resource<Speaker>> {

  @Override
    public Resource<Speaker> toResource(Speaker speaker) {
        Resource<Speaker> resource = new Resource<>(speaker);
        resource.add(new Link("http://speakers/" + speaker.getId()).withSelfRel());
        return resource;
    }
  
}