package br.jraphael.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.jraphael.api.DTOs.form.MovieForm;
import br.jraphael.api.DTOs.form.MovieFormUpdate;
import br.jraphael.api.models.Movie;
import br.jraphael.api.repositories.MovieRepository;

@Service
public class MovieService {
  
  @Autowired
  MovieRepository movieRepository;

  public ResponseEntity<Movie> create(MovieForm form) {
    Movie movie = movieRepository.save(form.convert());
    return ResponseEntity.ok().body(movie);
  }

  public ResponseEntity<List<Movie>> get(String id) {
    List<Movie> movies = new ArrayList<Movie>();
    
    if (id != null) {
      Optional<Movie> movie = movieRepository.findById(id);
      if (movie.isPresent()) {
        movies.add(movie.get());
        return ResponseEntity.ok().body(movies);
      }
      return ResponseEntity.badRequest().build();
    }

    movies = movieRepository.findAll();
    return ResponseEntity.ok().body(movies);
  }

  public ResponseEntity<String> delete(String id) {
    if (movieRepository.findById(id).isPresent())
    {
      movieRepository.deleteById(id);
      return ResponseEntity.ok().body("Movie successfully deleted.");
    }
    return ResponseEntity.badRequest().body("Movie not found");
  }

  public ResponseEntity<Movie> update(String id, MovieFormUpdate form) {
    Optional<Movie> movie = movieRepository.findById(id);
    if (movie.isPresent())
    {
      Movie updateMovie = movieRepository.saveAndFlush(form.convertUpdateToMovie(movie.get()));
      return ResponseEntity.ok().body(updateMovie);
    }
    return ResponseEntity.badRequest().build();
  }

}
