package br.jraphael.api.DTOs.form;

import java.time.LocalDateTime;

import br.jraphael.api.models.Movie;

public class MovieForm {
  
  private String title;
  private String sinopse;
  private String year;
  private long classification;
  private String imageUrl;
  private String trailerUrl;
  private String category;

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getSinopse() {
    return sinopse;
  }

  public void setSinopse(String sinopse) {
    this.sinopse = sinopse;
  }

  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }

  public long getClassification() {
    return classification;
  }

  public void setClassification(long classification) {
    this.classification = classification;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getTrailerUrl() {
    return trailerUrl;
  }

  public void setTrailerUrl(String trailerUrl) {
    this.trailerUrl = trailerUrl;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  } 

  public Movie convert() {
    Movie movie = new Movie();
    movie.setTitle(this.title);
    movie.setSinopse(this.sinopse);
    movie.setYear(this.year);
    movie.setClassification(this.classification);
    movie.setImageUrl(this.imageUrl);
    movie.setTrailerUrl(this.trailerUrl);
    movie.setCategory(category);
    movie.setUpdated_data(LocalDateTime.now());
    return movie;
  }

  @Override
  public String toString() {
    return "MovieForm [category=" + category + ", classification=" + classification + ", imageUrl=" + imageUrl
        + ", sinopse=" + sinopse + ", title=" + title + ", trailerUrl=" + trailerUrl + ", year=" + year + "]";
  }
  
}
