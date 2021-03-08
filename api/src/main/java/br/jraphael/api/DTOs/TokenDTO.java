package br.jraphael.api.DTOs;

public class TokenDTO {

	private String token;
	private String type;
	private UserDTO user;

	public TokenDTO(String token, String type, UserDTO user) {
		this.token = token;
		this.type = type;
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public String getType() {
		return type;
	}

	public UserDTO getUser() {
		return user;
	}
	
}
