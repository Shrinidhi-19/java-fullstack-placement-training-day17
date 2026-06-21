package com.example.testSaturday;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ModelClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String task;
    private String name;
    private String duedate;

    public ModelClass(){}
    public ModelClass(String task, String name, String duedate){
        this.task = task;
        this.name = name;
        this.duedate = duedate;
    }

    public String getTask(){
        return task;
    }

    public String getName(){
        return name;
    }

    public String getDuedate() {
        return duedate;
    }
}
