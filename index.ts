import inquirer from 'inquirer'
import chalk from 'chalk'
class Task {
    id: number;
    title: string;
    completed: boolean;

    constructor(id: number, title: string, completed: boolean = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

// TaskList.ts
class TaskList {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(title: string): void {
        const id = this.tasks.length + 1;
        const task = new Task(id, title);
        this.tasks.push(task);
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    toggleCompleted(id: number): void {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
    }

    printTasks(): void {
        console.log('Tasks:');
        this.tasks.forEach(task => {
            console.log(`[${task.completed ? 'x' : ' '}] ${task.id}. ${task.title}`);
        });
    }
}

// main.ts
const taskList = new TaskList();

taskList.addTask('Learn TypeScript');
taskList.addTask('Create a TO DO List project');
taskList.addTask('Share the project with others');

taskList.printTasks();

taskList.toggleCompleted(2);

taskList.printTasks();

taskList.removeTask(1);

taskList.printTasks();
