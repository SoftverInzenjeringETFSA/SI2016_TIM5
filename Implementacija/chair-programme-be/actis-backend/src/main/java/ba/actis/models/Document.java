package ba.actis.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="document")
public class Document {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@OneToOne(targetEntity=User.class)
	@JoinColumn(name="id")
	private Integer userId;
	private String documentLink;
	private Boolean isApproved;
	
	public Integer getUserId() {
		return userId;
	}
	
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	public String getDocumentLink() {
		return documentLink;
	}
	
	public void setDocumentLink(String documentLink) {
		this.documentLink = documentLink;
	}
	
	public Boolean getIsApproved() {
		return isApproved;
	}
	
	public void setIsApproved(Boolean isApproved) {
		this.isApproved = isApproved;
	} 
}
