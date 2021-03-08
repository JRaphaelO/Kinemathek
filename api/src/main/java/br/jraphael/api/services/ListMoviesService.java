package br.jraphael.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.jraphael.api.DTOs.form.ListMovieUpdateForm;
import br.jraphael.api.DTOs.form.ListMoviesCreateForm;
import br.jraphael.api.models.ListMovies;
import br.jraphael.api.models.Movie;
import br.jraphael.api.models.User;
import br.jraphael.api.repositories.ListMoviesRepository;
import br.jraphael.api.repositories.MovieRepository;
import br.jraphael.api.repositories.UserRepository;

@Service
public class ListMoviesService {

  @Autowired
  ListMoviesRepository listMoviesRepository;

  @Autowired
  UserRepository userRepository;

  @Autowired
  MovieRepository movieRepository;

  public ResponseEntity<ListMovies> create(ListMoviesCreateForm form) {
    Optional<User> user = userRepository.findById(form.getUser_id());
    Optional<Movie> movie = movieRepository.findById(form.getMovie_id());

    if (!user.isPresent() || !movie.isPresent())
      return ResponseEntity.badRequest().build();

    ListMovies listMovies = listMoviesRepository.save(form.convert(user.get(), movie.get()));
    return ResponseEntity.ok().body(listMovies);
  }

  public ResponseEntity<List<ListMovies>> get(String id) {
    // List<ListMovies> listMovies = listMoviesRepository.findByUserId(id);
    // return ResponseEntity.ok().body(listMovies);
    return null;
  }

  public ResponseEntity<String> delete(String id) {
    if (listMoviesRepository.findById(id).isPresent())
    {
      listMoviesRepository.deleteById(id);
      return ResponseEntity.ok().body("Comment successfully deleted.");
    }

    return ResponseEntity.badRequest().body("Comment not found.");
  }

  public ResponseEntity<ListMovies> update(String id, ListMovieUpdateForm form) {
    Optional<ListMovies> movies = listMoviesRepository.findById(id);
    if (movies.isPresent())
    {
      ListMovies listMovies = form.convertToListMovies(movies.get());
      return ResponseEntity.ok().body(listMoviesRepository.save(listMovies));
    }

    return ResponseEntity.badRequest().build();
  }
  
}
