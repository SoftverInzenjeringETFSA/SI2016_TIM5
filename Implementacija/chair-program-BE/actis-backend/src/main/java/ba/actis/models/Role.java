package ba.actis.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String roleName;
	
	public Role() {
	}
	
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long ID) {
		this.id = ID;
	}
	

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Role(Long id, String n)
	{
		this.id= id;
		this.roleName = n;
	}

}
