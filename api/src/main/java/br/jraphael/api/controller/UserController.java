package br.jraphael.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.jraphael.api.DTOs.UserDTO;
import br.jraphael.api.DTOs.form.UserFormCreate;
import br.jraphael.api.DTOs.form.UserFormUpdate;
import br.jraphael.api.services.UserService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

// @CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  UserService userService;

  @GetMapping
  ResponseEntity<List<UserDTO>> get(@RequestParam(required = false) String id) {
    return userService.get(id);
  }

  @PostMapping
  ResponseEntity<UserDTO> create(@RequestBody UserFormCreate userFormCreate, UriComponentsBuilder uriBuilder) {
    return userService.create(userFormCreate, uriBuilder);
  }

  @PutMapping("/{id}")
  ResponseEntity<UserDTO> update(@PathVariable String id, @RequestBody UserFormUpdate userFormUpdate) {
    return userService.update(id, userFormUpdate);
  }

  @DeleteMapping("/{id}")
  ResponseEntity<UserDTO> delete(@PathVariable String id) {
    return userService.delete(id);
  }
  
}
