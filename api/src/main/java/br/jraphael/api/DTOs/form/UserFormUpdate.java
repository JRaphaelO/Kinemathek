package br.jraphael.api.DTOs.form;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.jraphael.api.models.User;

public class UserFormUpdate {

  private Optional<String> email;
  private Optional<String> username;
  private Optional<String> password;
  private Optional<String> name;
  private Optional<String> description;
  private Optional<String> age;

  public Optional<String> getEmail() {
    return email;
  }

  public void setEmail(Optional<String> email) {
    this.email = email;
  }

  public Optional<String> getUsername() {
    return username;
  }

  public void setUsername(Optional<String> username) {
    this.username = username;
  }

  public Optional<String> getPassword() {
    return password;
  }

  public void setPassword(Optional<String> password) {
    this.password = password;
  }

  public Optional<String> getName() {
    return name;
  }

  public void setName(Optional<String> name) {
    this.name = name;
  }

  public Optional<String> getDescription() {
    return description;
  }

  public void setDescription(Optional<String> description) {
    this.description = description;
  }

  public Optional<String> getAge() {
    return age;
  }

  public void setAge(Optional<String> age) {
    this.age = age;
  }

  @Override
  public String toString() {
    return "UserFormUpdate [age=" + age + ", description=" + description + ", email=" + email + ", name=" + name
        + ", password=" + password + ", username=" + username + "]";
  }

  public User convertUpdateToUser(User user) {

    if (this.age != null)
      user.setAge(Integer.parseInt(this.age.get()));

    if (this.name != null)
      user.setName(this.name.get());

    if (this.email != null)
      user.setEmail(this.email.get());

    if (this.password != null) {
      String hash_password = new BCryptPasswordEncoder().encode(this.password.get());
      user.setPassword(hash_password);
    }
    if (this.username != null)
      user.setUsername(this.username.get());
    if (this.description != null)
      user.setDescription(this.description.get());

    user.setUpdated_data(LocalDateTime.now());

    return user;
  }

}
