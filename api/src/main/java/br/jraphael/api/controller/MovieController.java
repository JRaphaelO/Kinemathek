package br.jraphael.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.jraphael.api.DTOs.form.MovieForm;
import br.jraphael.api.DTOs.form.MovieFormUpdate;
import br.jraphael.api.models.Movie;
import br.jraphael.api.services.MovieService;

@RestController
@RequestMapping("/movie")
public class MovieController {

  @Autowired
  MovieService movieService;

  @PostMapping 
  ResponseEntity<Movie> create(@RequestBody MovieForm form) {
    return movieService.create(form);
  }

  @GetMapping
  ResponseEntity<List<Movie>> get(@RequestParam(required = false) String id) {
    return movieService.get(id);
  }
  
  @DeleteMapping
  ResponseEntity<String> delete(@PathVariable String id) {
    return movieService.delete(id);
  }

  @PutMapping 
  ResponseEntity<Movie> update(@PathVariable String id, @RequestBody MovieFormUpdate form) {
    return movieService.update(id, form);
  }
}
