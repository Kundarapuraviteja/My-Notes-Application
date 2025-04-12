package com.my.notes.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactPage {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String name, String email,String msg){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setSubject("feedback from user - "+name);
        message.setTo("kundarapuraviteja981@gmail.com");
        message.setText(
                "Name: " + name + "\n" +
                        "Email: " + email + "\n\n" +
                        "Message:\n" + msg
        );
        mailSender.send(message);
    }
}
