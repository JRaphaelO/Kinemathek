package br.jraphael.api.services;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import br.jraphael.api.repositories.UserRepository;
import br.jraphael.api.DTOs.UserDTO;
import br.jraphael.api.DTOs.form.UserFormCreate;
import br.jraphael.api.DTOs.form.UserFormUpdate;
import br.jraphael.api.models.User;

@Service
public class UserService {

  @Autowired
  UserRepository userRepository;

  public ResponseEntity<UserDTO> create(UserFormCreate userFormCreate, UriComponentsBuilder uriBuilder) {
    System.out.println(userFormCreate.toString());
    if (userRepository.findByEmail(userFormCreate.getEmail()).isPresent()
        || userRepository.findByUsername(userFormCreate.getUsername()).isPresent()) {
      return ResponseEntity.badRequest().build();
    }

    User user = userFormCreate.convertToUser();
    user = userRepository.save(user);
    URI uri = uriBuilder.path("/users/{id}").buildAndExpand(user.getId()).toUri();
    return ResponseEntity.created(uri).body(new UserDTO(user));
  }

  public ResponseEntity<List<UserDTO>> get(String id) {
    List<UserDTO> users = new ArrayList<UserDTO>();

    if (id != null) {
      Optional<User> user = userRepository.findById(id);

      if (user.isPresent()) {
        users.add(new UserDTO(user.get()));
        return ResponseEntity.ok().body(users);
      }

      return ResponseEntity.notFound().build();
    }

    List<User> listUsers = userRepository.findAll();
    users = new UserDTO().convertListUsersToDTOs(listUsers);
    return ResponseEntity.ok().body(users);
  }

  public ResponseEntity<UserDTO> update(String id, UserFormUpdate userFormUpdate) {
    Optional<User> found_user = userRepository.findById(id);
    if (found_user.isPresent()) {
      User user = userFormUpdate.convertUpdateToUser(found_user.get());
      user = userRepository.saveAndFlush(user);

      return ResponseEntity.ok().body(new UserDTO(user));
    }
    return ResponseEntity.notFound().build();
  }

  public ResponseEntity<UserDTO> delete(String id) {
    Optional<User> user = userRepository.findById(id);
    if (user.isPresent()) {
      userRepository.delete(user.get());
      return ResponseEntity.ok().body(new UserDTO(user.get()));
    }
    return ResponseEntity.notFound().build();
  }
}
