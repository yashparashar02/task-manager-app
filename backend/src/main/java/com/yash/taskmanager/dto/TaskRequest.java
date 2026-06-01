package com.yash.taskmanager.dto;

import com.yash.taskmanager.entity.TaskStatus;
import lombok.Data;

@Data
public class TaskRequest {

    private String title;
    private String description;
    private TaskStatus status;
}