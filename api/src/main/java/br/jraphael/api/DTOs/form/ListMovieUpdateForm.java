package br.jraphael.api.DTOs.form;

import java.util.Optional;

import br.jraphael.api.models.ListMovies;

public class ListMovieUpdateForm {
  private Optional<String> note;
  private Optional<String> comment;

  public Optional<String> getNote() {
    return note;
  }

  public void setNote(Optional<String> note) {
    this.note = note;
  }

  public Optional<String> getComment() {
    return comment;
  }

  public void setComment(Optional<String> comment) {
    this.comment = comment;
  }

  public ListMovies convertToListMovies(ListMovies listMovies) {
    
    return null;
  }

  

}
