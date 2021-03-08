package br.jraphael.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.jraphael.api.models.Movie;

public interface MovieRepository extends JpaRepository<Movie, String> {
  
}
