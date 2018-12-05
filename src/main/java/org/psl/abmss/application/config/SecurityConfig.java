package org.psl.abmss.application.config;

import org.psl.abmss.application.security.CustomUserDetailsService;
import org.psl.abmss.application.security.JwtAuthenticationEntryPoint;
import org.psl.abmss.application.security.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        securedEnabled = true,
        jsr250Enabled = true,
        prePostEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	CustomUserDetailsService customUserDetailsService;
	
	@Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    http
    	.cors()
    		.and()
    	.csrf()
    		.disable()
    	.exceptionHandling()
    		.authenticationEntryPoint(unauthorizedHandler)
    		.and()
    	.sessionManagement()
    		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    		.and()
    	.authorizeRequests()
    		.antMatchers("/",
                    "/favicon.ico",
                    "/**/*.png",
                    "/**/*.gif",
                    "/**/*.svg",
                    "/**/*.jpg",
                    "/**/*.html",
                    "/**/*.css",
    				"/**/*.js")
    			.permitAll()
    		.antMatchers("/abmss/user/add")
    			.hasAnyAuthority("ROLE_ADMIN","ROLE_PROJECT_ANIMATOR")
    		.antMatchers("/abmss/institution/add")
				.hasAnyAuthority("ROLE_ADMIN")
			.antMatchers("/abmss/doctor/add")
				.hasAnyAuthority("ROLE_ADMIN","ROLE_CENTER_HEAD")
			.antMatchers("/abmss/treatment/add")
				.hasAnyAuthority("ROLE_DOCTOR","ROLE_PROJECT_ANIMATOR")
			.antMatchers("/abmss/transportation/add")
				.hasAnyAuthority("ROLE_PROJECT_ANIMATOR")
			.antMatchers("/abmss/transportation/add")
				.hasAnyAuthority("ROLE_PROJECT_ANIMATOR")
			.antMatchers("/","/login","/registration","/getRoles","/recover/*")
    			.permitAll()
    		.antMatchers("/abmss/**")
    			.authenticated();
    http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
	
	
}
