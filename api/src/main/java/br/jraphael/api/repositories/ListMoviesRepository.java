package br.jraphael.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.jraphael.api.models.ListMovies;

public interface ListMoviesRepository extends JpaRepository<ListMovies, String> {

    List<ListMovies> findByUserId(String id);
}
