package br.jraphael.api.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import br.jraphael.api.models.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class TokenService {

  @Value("${spring.jwt.expiration}")
  private String expiration;

  @Value("${spring.jwt.secret}")
  private String secret;

  public String generateToken(Authentication authentication) {
    User user = (User) authentication.getPrincipal();

    Date now = new Date();
    Date dateExpiration = new Date(now.getTime() + Long.parseLong(expiration));

    return Jwts.builder()
        .setIssuer("API do backend Zeitplan")
        .setSubject(user.getId()).setIssuedAt(now)
        .setExpiration(dateExpiration)
        .signWith(SignatureAlgorithm.HS256, secret).compact();
  }

  public boolean isTokenValid(String token) {
    try {
      Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  public String getIdUser(String token) {
    Claims claims = Jwts.parser().setSigningKey(this.secret).parseClaimsJws(token).getBody();
    return claims.getSubject();
  }

}
