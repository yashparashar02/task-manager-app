package com.yash.taskmanager.service;

import com.yash.taskmanager.dto.TaskRequest;
import com.yash.taskmanager.entity.Task;
import com.yash.taskmanager.entity.User;
import com.yash.taskmanager.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.yash.taskmanager.entity.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    @Override
    public Task createTask(TaskRequest request) {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        User user =
                (User) authentication.getPrincipal();

        Task task = Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .status(request.getStatus())
                .user(user)
                .build();

        return taskRepository.save(task);
    }

    @Override
    public List<Task> getTasks() {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        User user =
                (User) authentication.getPrincipal();

        return taskRepository.findByUser(user);
    }

    @Override
    public Task updateTask(
            Long id,
            TaskRequest request
    ) {

        Task task =
                taskRepository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Task not found"
                                )
                        );

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());

        return taskRepository.save(task);
    }

    @Override
    public void deleteTask(Long id) {

        Task task =
                taskRepository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Task not found"
                                )
                        );

        taskRepository.delete(task);
    }
}