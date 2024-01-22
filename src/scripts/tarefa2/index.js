import { tasks } from './database.js';

console.log(`
TAREFA 2

`)

// Função retorna um novo array com apenas as descrições das tarefas
const getTasksDescriptions = (tasksList) => {

    const tasksDescriptions = tasksList.map(function(element) {
        return element.description;
    });
    return tasksDescriptions

}
console.log(getTasksDescriptions(tasks) )


// Função para filtrar tarefas por prioridade
const filterTasksByPriority = (tasksList, priority) => {

    const highPriorityTasks = tasksList.filter(element => element.priority === priority);
    return highPriorityTasks;

}
console.log(filterTasksByPriority(tasks, 'média'))


// Função para obter uma task pelo seu id
const findTaskById = (tasksList, id) => {

    const returnDescrpt = tasksList.filter(element => element.id === id);
    return returnDescrpt[0]

}
console.log(findTaskById(tasks, 5))


// Função para remover uma task pelo seu id
const removeTask = (tasksList, id) => {
    
    const findItem = tasksList.findIndex(list => list.id === id);
    if(findItem === -1){
        return 'Tarefa não encontrada.'
    }else{
        tasksList.splice(findItem, 1);
        return tasksList
    }
}

console.log(removeTask(tasks,5))
console.log(removeTask(tasks,50))