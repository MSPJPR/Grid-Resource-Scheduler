let resources = [];
let tasks = [];
let taskQueue = [];

function addResource() {
    const name = document.getElementById('resourceName').value;
    const cpu = parseInt(document.getElementById('cpu').value);
    const ram = parseInt(document.getElementById('ram').value);

    if (name && cpu > 0 && ram > 0) {
        resources.push({ name, cpu, ram, available: true });
        displayResources();
        clearResourceInputs();
    }
}

function submitTask() {
    const taskName = document.getElementById('taskName').value;
    const taskCpu = parseInt(document.getElementById('taskCpu').value);
    const taskRam = parseInt(document.getElementById('taskRam').value);

    if (taskName && taskCpu > 0 && taskRam > 0) {
        tasks.push({ taskName, taskCpu, taskRam });
        taskQueue.push({ taskName, taskCpu, taskRam });
        displayTasks();
        clearTaskInputs();
    }
}

function displayResources() {
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = '';
    resources.forEach((res, index) => {
        resourceList.innerHTML += `<li>${res.name} - CPU: ${res.cpu}, RAM: ${res.ram} (${res.available ? 'Available' : 'In Use'})</li>`;
    });
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        taskList.innerHTML += `<li>${task.taskName} - CPU: ${task.taskCpu}, RAM: ${task.taskRam}</li>`;
    });
}

function clearResourceInputs() {
    document.getElementById('resourceName').value = '';
    document.getElementById('cpu').value = '';
    document.getElementById('ram').value = '';
}

function clearTaskInputs() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskCpu').value = '';
    document.getElementById('taskRam').value = '';
}

function executeTasks() {
    const algorithm = document.getElementById('schedulingAlgorithm').value;
    const executionLog = document.getElementById('executionLog');
    executionLog.innerHTML = '';

    if (algorithm === 'FCFS') {
        taskQueue.forEach(task => {
            const resource = resources.find(res => res.available && res.cpu >= task.taskCpu && res.ram >= task.taskRam);
            if (resource) {
                resource.available = false;
                executionLog.innerHTML += `<li>Task "${task.taskName}" executed on resource "${resource.name}".</li>`;
                setTimeout(() => {
                    resource.available = true;
                    displayResources();
                }, 3000);
            } else {
                executionLog.innerHTML += `<li>No available resource for task "${task.taskName}".</li>`;
            }
        });
    } else if (algorithm === 'RR') {
        let i = 0;
        taskQueue.forEach(task => {
            const resource = resources[i % resources.length];
            if (resource.available && resource.cpu >= task.taskCpu && resource.ram >= task.taskRam) {
                resource.available = false;
                executionLog.innerHTML += `<li>Task "${task.taskName}" executed on resource "${resource.name}".</li>`;
                setTimeout(() => {
                    resource.available = true;
                    displayResources();
                }, 3000);
            } else {
                executionLog.innerHTML += `<li>No available resource for task "${task.taskName}".</li>`;
            }
            i++;
        });
    }

    taskQueue = [];
    tasks = [];
    displayTasks();
    displayResources();
}

document.getElementById('schedulingAlgorithm').addEventListener('change', executeTasks);
