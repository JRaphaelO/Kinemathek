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

import br.jraphael.api.DTOs.ListMoviesDTO;
import br.jraphael.api.DTOs.form.ListMovieUpdateForm;
import br.jraphael.api.DTOs.form.ListMoviesCreateForm;
import br.jraphael.api.models.ListMovies;
import br.jraphael.api.services.ListMoviesService;

@RestController
@RequestMapping("/listMovies")
public class ListMoviesController {

  @Autowired
  ListMoviesService listMoviesService;

  @PostMapping
  ResponseEntity<ListMoviesDTO> create(@RequestBody ListMoviesCreateForm form) {
    return listMoviesService.create(form);
  }

  @GetMapping("/{id}")
  ResponseEntity<List<ListMoviesDTO>> get(@PathVariable String id) {
    return listMoviesService.get(id);
  }

  @DeleteMapping("/{id}")
  ResponseEntity<String> delete(@PathVariable String id) {
    return listMoviesService.delete(id);
  }

  @PutMapping("/{id}")
  ResponseEntity<ListMovies> update(@PathVariable String id, @RequestBody ListMovieUpdateForm form) {
    return listMoviesService.update(id, form);
  }

}
