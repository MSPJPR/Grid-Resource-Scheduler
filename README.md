# Grid-Resource-Scheduler
Project Overview: Grid Resource Scheduler

website link:
https://lnkd.in/gUvh3etm

Introduction

This project is an interactive web-based Grid Resource Scheduler designed to simulate resource management and task scheduling in a grid computing environment. The scheduler allows users to register resources (with CPU and RAM capacities), submit tasks (with required CPU and RAM specifications), and execute these tasks using two common scheduling algorithms: First-Come, First-Serve (FCFS) and Round-Robin (RR).


---

Key Features

1. Resource Registration:

Users can register resources by specifying a name, CPU cores, and RAM capacity.

Resources are displayed in a list with their availability status.



2. Task Submission:

Users can submit tasks by specifying a task name, required CPU cores, and required RAM capacity.

Tasks are displayed in a pending tasks list.



3. Scheduling Algorithms:

First-Come, First-Serve (FCFS): Tasks are assigned to the first available resource that meets their requirements.

Round-Robin (RR): Tasks are distributed evenly across resources in a cyclic order.



4. Execution Logging:

An execution log displays the assignment of tasks to resources.

Tasks that cannot be executed due to insufficient resources are logged as "no available resource."



5. Responsive Design:

The website is fully responsive and can be used on both desktop and mobile devices.





---

Technologies Used

HTML for structure.

CSS for styling and responsiveness.

JavaScript for interactivity and logic.



---

Files in the Project

1. index.html
The main HTML file that provides the structure of the application, including input fields, buttons, and sections for displaying resources, tasks, and execution logs.


2. style.css
The CSS file for styling the elements, providing a clean and modern interface, and ensuring responsiveness.


3. script.js
The JavaScript file containing all the logic for adding resources, submitting tasks, executing tasks using different scheduling algorithms, and updating the UI dynamically.




---

How It Works

1. Register Resources:
Enter the resource name, CPU cores, and RAM, then click "Add Resource." The resource gets added to the available resources list.


2. Submit Tasks:
Enter the task name, required CPU, and RAM, then click "Submit Task." The task gets added to the pending tasks list.


3. Choose Scheduling Algorithm:
Select either FCFS or Round-Robin from the dropdown menu.


4. Execute Tasks:
The tasks are executed based on the chosen algorithm, and the execution log displays which resource each task was assigned to.

This project provides a practical demonstration of grid resource management concepts and scheduling algorithms in a simplified web-based environment.
