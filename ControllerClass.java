package com.example.testSaturday;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ControllerClass {
    private final RepositoryClass repo;
    public ControllerClass(RepositoryClass repo){
        this.repo = repo;
    }

    @GetMapping("/show")
    public List<ModelClass> showTask(){
        return repo.findAll();
    }

    @GetMapping("/task")
    public String sayTask() {
        List<ModelClass> all = repo.findAll();
        return all.get(0).getTask();
    }
    @GetMapping("/task/name")
    public String sayName() {
        List<ModelClass> all = repo.findAll();
        return all.get(0).getName();
    }
    @GetMapping("/task/duedate")
    public String sayDuedate() {
        List<ModelClass> all = repo.findAll();
        return all.get(0).getDuedate();
    }

    @PostMapping("/task")
    public String SavTask(@RequestBody ModelClass m){
        repo.save(m);
        return "Task Saved";
    }
}
