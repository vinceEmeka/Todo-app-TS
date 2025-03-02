"use strict";
// TodoItem Interface
// TodoList Class
class TodoList {
    constructor() {
        this.todos = [];
        this.todoId = 1;
    }
    addTodo(task, dueDate) {
        const newTodo = { id: this.todoId++, task, completed: false, dueDate };
        this.todos.push(newTodo);
        console.log(`Added: ${task} (Due: ${dueDate.toLocaleString()})`);
    }
    completeTodo(id) {
        const todo = this.todos.find(todos => todos.id === id);
        if (todo) {
            todo.completed = true;
        }
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    listTodos() {
        return this.todos;
    }
    filterTodoByStatus(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
    updateTodo(id, newTask) {
        const todo = this.todos.find(todos => todos.id === id);
        if (todo) {
            todo.task = newTask;
        }
    }
    clearCompletedTodos() {
        this.todos = this.todos.filter(todos => !todos.completed);
    }
}
const myTodoList = new TodoList();
// Adding todos with a due date.
myTodoList.addTodo("Wash Car", new Date("2025-03-04"));
myTodoList.addTodo("Cook Rice", new Date("2025-03-03"));
myTodoList.addTodo("Submit My task", new Date("2025-03-02"));
myTodoList.addTodo("Buy a Macbook!!!", new Date("2025-03-05"));
// // Mark a todo completed.
myTodoList.completeTodo(1);
// // Update the task description of a todo.
myTodoList.updateTodo(2, "Cook Fried Rice");
// List all todos.
console.log("All Todos:", myTodoList.listTodos());
// Filters only completed todos.
console.log("Completed Todos:", myTodoList.filterTodoByStatus(true));
// Clear all completed todos.
myTodoList.clearCompletedTodos();
// List remaining todos.
console.log("Remaining Todos:", myTodoList.listTodos());
