package br.jraphael.api.DTOs.form;

import java.time.LocalDateTime;
import java.util.Optional;

import br.jraphael.api.models.Movie;

public class MovieFormUpdate {
  private Optional<String> title;
  private Optional<String> sinopse;
  private Optional<String> year;
  private Optional<String> classification;
  private Optional<String> imageUrl;
  private Optional<String> trailerUrl;
  private Optional<String> category;

  public Optional<String> getTitle() {
    return title;
  }

  public void setTitle(Optional<String> title) {
    this.title = title;
  }

  public Optional<String> getSinopse() {
    return sinopse;
  }

  public void setSinopse(Optional<String> sinopse) {
    this.sinopse = sinopse;
  }

  public Optional<String> getYear() {
    return year;
  }

  public void setYear(Optional<String> year) {
    this.year = year;
  }

  public Optional<String> getClassification() {
    return classification;
  }

  public void setClassification(Optional<String> classification) {
    this.classification = classification;
  }

  public Optional<String> getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(Optional<String> imageUrl) {
    this.imageUrl = imageUrl;
  }

  public Optional<String> getTrailerUrl() {
    return trailerUrl;
  }

  public void setTrailerUrl(Optional<String> trailerUrl) {
    this.trailerUrl = trailerUrl;
  }

  public Optional<String> getCategory() {
    return category;
  }

  public void setCategory(Optional<String> category) {
    this.category = category;
  }

  public Movie convertUpdateToMovie(Movie movie) {
    if (this.title != null)
      movie.setTitle(this.title.get());
      
    if (this.sinopse != null)
      movie.setSinopse(this.sinopse.get());

    if (this.year != null)
      movie.setYear(this.year.get());

    if (this.classification != null)
      movie.setClassification(Integer.parseInt(this.classification.get()));

    if (this.imageUrl != null)
      movie.setImageUrl(this.imageUrl.get());

    if (this.trailerUrl != null)
      movie.setTrailerUrl(this.imageUrl.get());

    if (this.category != null)
      movie.setCategory(this.category.get());

    movie.setUpdated_data(LocalDateTime.now());

    return movie;
  }

}