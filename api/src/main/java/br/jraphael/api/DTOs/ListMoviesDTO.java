package br.jraphael.api.DTOs;

import java.util.List;
import java.util.stream.Collectors;

import br.jraphael.api.models.ListMovies;
import br.jraphael.api.models.Movie;

public class ListMoviesDTO {

    private String id;
    private Movie movie;
    private float note;
    private String comment;

    public ListMoviesDTO(ListMovies listMovies) {
        this.id = listMovies.getId();
        this.movie = listMovies.getMovie();
        this.note = listMovies.getNote();
        this.comment = listMovies.getComment();
    }

    public ListMoviesDTO() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public float getNote() {
        return note;
    }

    public void setNote(float note) {
        this.note = note;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public List<ListMoviesDTO> convertListListMoviesToDTOs(List<ListMovies> listMovies) {
        System.out.println("convertListUsersTo");
        return listMovies.stream().map(ListMoviesDTO::new).collect(Collectors.toList());
    }
}
