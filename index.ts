// TodoItem Interface

interface TodoItem {
 id: number,
 task: string,
 completed: boolean,
 dueDate: Date
}

// TodoList Class

class TodoList {
private todos: TodoItem[] = [];
private todoId: number = 1;

addTodo(task: string, dueDate: Date): void{
const newTodo: TodoItem = { id: this.todoId++, task, completed: false, dueDate}
this.todos.push(newTodo);
console.log(`Added: ${task} (Due: ${dueDate.toLocaleString()})`);
}

completeTodo(id: number, dueDate: Date): void {
const todo = this.todos.find(todos => todos.id === id);
if(todo) {
 todo.completed = true;
}
}

removeTodo(id:number): void {
this.todos = this.todos.filter(todo => todo.id !== id);
}

listTodos(): TodoItem[] {
return this.todos;
}

filterTodoByStatus(completed: boolean): TodoItem[] {
return this.todos.filter(todo => todo.completed === completed);
}


updateTodo(id:number, newTask: string ){
const todo = this.todos.find(todos => todos.id === id);
if(todo) {
todo.task = newTask;
}
}

clearCompletedTodos(): void{
this.todos = this.todos.filter(todos => !todos.completed)
}
}


// --- Example usage ---
const myTodoList = new TodoList();

// Adding todos with a due date.
myTodoList.addTodo("Learn TypeScript", new Date("2025-04-15"));
myTodoList.addTodo("Write unit tests", new Date("2025-04-20"));

// Mark the first todo as completed.
myTodoList.completeTodo(1, new Date("2025-04-20"));

// Update the task description of the second todo.
myTodoList.updateTodo(2, "Write comprehensive unit tests");

// List all todos.
console.log("All Todos:", myTodoList.listTodos());

// Filter only completed todos.
console.log("Completed Todos:", myTodoList.filterTodoByStatus(true));

// Clear all completed todos.
myTodoList.clearCompletedTodos();

// List remaining todos.
console.log("Remaining Todos:", myTodoList.listTodos());




