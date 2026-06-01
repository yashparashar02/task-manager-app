package com.yash.taskmanager.service;

import com.yash.taskmanager.dto.LoginRequest;
import com.yash.taskmanager.dto.RegisterRequest;

public interface AuthService {

    void register(RegisterRequest request);

    String login(LoginRequest request);
}