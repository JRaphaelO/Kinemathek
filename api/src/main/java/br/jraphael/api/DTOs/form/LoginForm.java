package br.jraphael.api.DTOs.form;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class LoginForm {

	private String username;
	private String password;
	
	public UsernamePasswordAuthenticationToken convert() {
		System.out.println(this.toString());
		return new UsernamePasswordAuthenticationToken(username, password);
	}

	@Override
	public String toString() {
		return "LoginForm [senha=" + password + ", username=" + username + "]";
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

	
  
}
