package org.psl.abmss.application.security;



import org.psl.abmss.application.entity.Users;
import org.psl.abmss.application.exception.ResourceNotFoundException;
import org.psl.abmss.application.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;
	
	/*@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = userRepository.findByUserEmail(username)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with username or email : " + username)
				);
		return UserPrincipal.create(user);
	}
	*/

	@Override
	public UserDetails loadUserByUsername(String logonId) throws UsernameNotFoundException {
		Users user = userRepository.findByLogonId(logonId)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with username or email : " + logonId)
				);
		return UserPrincipal.create(user);
	}

	@Transactional
    public UserDetails loadUserById(Integer id) {
        Users user = userRepository.findByUserId(id).orElseThrow(
        		() -> new ResourceNotFoundException("User", "id", id)
        		);

        return UserPrincipal.create(user);
}
}
