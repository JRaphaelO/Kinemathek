package br.jraphael.api.DTOs;

import java.util.List;
import java.util.stream.Collectors;

import br.jraphael.api.models.User;

public class UserDTO {
  private String id;
  private String username;
  private String email;
  private String name;
  private String description;
  private int age;

  public UserDTO() {
  }

  public UserDTO(User user) {
    this.id = user.getId();
    this.username = user.getUsername();
    this.email = user.getEmail();
    this.name = user.getName();
    this.age = user.getAge();
    this.description = user.getDescription();
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public int getAge() {
    return age;
  }

  public String getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public String getEmail() {
    return email;
  }

  public String getName() {
    return name;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public List<UserDTO> convertListUsersToDTOs(List<User> users) {
    System.out.println("convertListUsersTo");
    return users.stream().map(UserDTO::new).collect(Collectors.toList());
  }
}
