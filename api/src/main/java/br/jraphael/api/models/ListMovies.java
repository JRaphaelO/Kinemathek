package br.jraphael.api.models;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class ListMovies implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(generator = "system-uuid")
  @GenericGenerator(name = "system-uuid", strategy = "uuid")
  private String id;

  @OneToOne()
  private Movie movie;

  @OneToOne()
  private User user;

  private float note;
  private String comment;

  private LocalDateTime created_data = LocalDateTime.now();
  private LocalDateTime updated_data;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public float getNote() {
    return note;
  }

  public void setNote(float note) {
    this.note = note;
  }

  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  public LocalDateTime getCreated_data() {
    return created_data;
  }

  public void setCreated_data(LocalDateTime created_data) {
    this.created_data = created_data;
  }

  public LocalDateTime getUpdated_data() {
    return updated_data;
  }

  public void setUpdated_data(LocalDateTime updated_data) {
    this.updated_data = updated_data;
  }

  public Movie getMovie() {
    return movie;
  }

  public void setMovie(Movie movie) {
    this.movie = movie;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

}
