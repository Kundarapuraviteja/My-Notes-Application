package com.my.notes.model;

import lombok.Data;

@Data
public class ContactFormRequest {
    private String name;
    private String email;
    private String message;
}