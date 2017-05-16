package ba.actis.repositories;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ba.actis.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
