package br.jraphael.api.models;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Movie implements Serializable {
  
  private static final long serialVersionUID = 1L;
  
  @Id
  @GeneratedValue(generator = "system-uuid")
  @GenericGenerator(name = "system-uuid", strategy = "uuid")
  private String id;
  private String title;
  private String sinopse;
  private String year;
  private long classification;
  private String imageUrl;
  private String trailerUrl;
  private String category;

  private LocalDateTime created_data = LocalDateTime.now();
  private LocalDateTime updated_data;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

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
}
