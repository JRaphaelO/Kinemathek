package br.jraphael.api.DTOs.form;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.time.LocalDateTime;
import br.jraphael.api.models.User;

public class UserFormCreate {
  private String email;
  private String username;
  private String password;
  private String name;
  private String description;
  private int age;

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public User convertToUser() {
    String hash_password = new BCryptPasswordEncoder().encode(this.password);
    
    User user = new User();
    user.setEmail(this.email);
    user.setPassword(hash_password);
    user.setAge(this.age);
    user.setName(this.name);
    user.setDescription(this.description);
    user.setUsername(this.username);
    user.setUpdated_data(LocalDateTime.now());

    return user;
  }

  @Override
  public String toString() {
    return "UserForm [age=" + age + ", description=" + description + ", email=" + email + ", name=" + name
        + ", password=" + password + ", username=" + username + "]";
  }
}
