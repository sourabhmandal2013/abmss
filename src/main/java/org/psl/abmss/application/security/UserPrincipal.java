package org.psl.abmss.application.security;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.psl.abmss.application.entity.Users;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserPrincipal implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2976732250914264997L;

	private Integer userId;

	private String userName;
	
	private String logonId;

    @JsonIgnore
    private String userEmail;

    @JsonIgnore
    private String userPass;

    private Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(Integer userId, String userName, String userEmail, String userPass, String logonId,
			List<GrantedAuthority> authorities) {
    		this.userId = userId;
	        this.userName = userName;
	        this.userEmail = userEmail;
	        this.logonId = logonId;
	        this.userPass = userPass;
	        this.authorities = authorities;
	}

	/*
    	this.id = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
	*/
	public static UserPrincipal create(Users user) {
        List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
                new SimpleGrantedAuthority(role.getRole())
        ).collect(Collectors.toList());

        return new UserPrincipal(
                user.getUserId(),
                user.getUserName(),
                user.getUserEmail(),
                user.getUserPass(),
                user.getLogonId(),
                authorities
        );
    }
	public Integer getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }
    
    public String getLogonId()  {
        return logonId;
    }
    
    /*
    public String getEmail() {
        return userEmail;
    }*/
	
	
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return userPass;
	}
	
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userEmail;
	}
    

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPrincipal that = (UserPrincipal) o;
        return Objects.equals(userId, that.userId);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userId);
    }

	@Override
	public String toString() {
		return "userId:" + userId + ", userName:" + userName + ", userEmail:" + userEmail + ", logonId:" + logonId
				+ ", authorities:" + authorities;
	}
}
