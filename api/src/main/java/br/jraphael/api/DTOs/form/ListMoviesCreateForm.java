package br.jraphael.api.DTOs.form;

import java.time.LocalDateTime;

import br.jraphael.api.models.ListMovies;
import br.jraphael.api.models.Movie;
import br.jraphael.api.models.User;

public class ListMoviesCreateForm {
  private String user_id;
  private String movie_id;
  private float note;
  private String comment;

  public String getUser_id() {
    return user_id;
  }

  public void setUser_id(String user_id) {
    this.user_id = user_id;
  }

  public String getMovie_id() {
    return movie_id;
  }

  public void setMovie_id(String movie_id) {
    this.movie_id = movie_id;
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

  public ListMovies convert(User user, Movie movie) {
    ListMovies listMovies = new ListMovies();

    listMovies.setUser(user);
    listMovies.setMovie(movie);

    listMovies.setNote(note);
    listMovies.setComment(comment);
    listMovies.setUpdated_data(LocalDateTime.now());
    
	  return listMovies;
  }  
  
}
