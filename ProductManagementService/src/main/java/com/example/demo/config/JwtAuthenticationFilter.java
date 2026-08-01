package com.example.demo.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.services.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	
	@Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsService userDetailsService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String authHeader = request.getHeader("Authorization");
		System.out.println("Authorization Header = " + authHeader);
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
        String token =  authHeader.substring(7);
        
        try {
            String username = jwtService.extractUsername(token);

            if (username != null &&
                SecurityContextHolder.getContext().getAuthentication() == null) {

                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                if (jwtService.isTokenValid(token, userDetails)) {
                    UsernamePasswordAuthenticationToken auth =
                        new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities());

                    SecurityContextHolder.getContext().setAuthentication(auth);
                    System.out.println("Authorities = " + auth.getAuthorities());
                }
            }
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        
        
//        String username =  jwtService.extractUsername(token);
//        System.out.println("Username = " + username);
//        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//            System.out.println(userDetails.getAuthorities());
//            if (jwtService.isTokenValid(token, userDetails)) {
//                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
//                                userDetails, null, userDetails.getAuthorities());
//                SecurityContextHolder.getContext().setAuthentication(auth);
//                System.out.println("JWT Valid");
//            }
//        }
        
        System.out.println(
        	    "Security Context = " +
        	    SecurityContextHolder.getContext().getAuthentication()
        	);
        
        filterChain.doFilter( request, response);		
	}

}

