package com.yash.taskmanager.service;

import com.yash.taskmanager.dto.TaskRequest;
import com.yash.taskmanager.entity.Task;

import java.util.List;

public interface TaskService {

    Task createTask(TaskRequest request);

    List<Task> getTasks();

    Task updateTask(Long id, TaskRequest request);

    void deleteTask(Long id);
}