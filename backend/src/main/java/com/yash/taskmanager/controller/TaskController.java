package com.yash.taskmanager.controller;

import com.yash.taskmanager.dto.TaskRequest;
import com.yash.taskmanager.entity.Task;
import com.yash.taskmanager.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public Task createTask(
            @RequestBody TaskRequest request
    ) {
        return taskService.createTask(request);
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getTasks();
    }

    @PutMapping("/{id}")
    public Task updateTask(
            @PathVariable Long id,
            @RequestBody TaskRequest request
    ) {
        return taskService.updateTask(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(
            @PathVariable Long id
    ) {
        taskService.deleteTask(id);
    }
}