package br.jraphael.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.jraphael.api.DTOs.TokenDTO;
import br.jraphael.api.DTOs.UserDTO;
import br.jraphael.api.DTOs.form.LoginForm;
import br.jraphael.api.models.User;
import br.jraphael.api.services.TokenService;

// @CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

  @Autowired
  AuthenticationManager authManager;

  @Autowired
  TokenService tokenService;

  @PostMapping
  @Async
  public ResponseEntity<TokenDTO> authenticate(@RequestBody LoginForm form) {
    System.out.println("Test");
    System.out.println(form.toString());
    UsernamePasswordAuthenticationToken dataLogin = form.convert();

    try {
      Authentication authentication = authManager.authenticate(dataLogin);
      User user = (User) authentication.getPrincipal();
      String token = tokenService.generateToken(authentication);

      return ResponseEntity.ok(new TokenDTO(token, "Bearer", new UserDTO(user)));
    } catch (AuthenticationException e) {
      return ResponseEntity.badRequest().build();
    }
  }

}
