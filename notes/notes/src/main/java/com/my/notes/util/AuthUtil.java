package com.my.notes.util;

import com.my.notes.model.User;
import com.my.notes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class AuthUtil {

    @Autowired
    UserRepository userRepository;

    public Long loggedInUserId(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        User user=userRepository.findByUserName(authentication.getName())
                .orElseThrow(()-> new RuntimeException("user not found"));
           return user.getUserId();
    }

    public User loggedInUser(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        return userRepository.findByUserName(authentication.getName())
                .orElseThrow(()-> new RuntimeException("user not found")) ;

    }
}
