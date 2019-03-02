taskApp.controller("taskController", ["$rootScope", function ($rootScope) {

    $rootScope.tasks = [
    {name: 'Varrer o quarto', category: 'Casa', done: false},
    {name: 'Lavar a louça', category: 'Casa', done: true},
    {name: 'Lavar as roupas', category: 'Casa', done: false},
    {name: 'Consertar a porta', category: 'Casa', done: false},
    {name: 'Terminar o relatório', category: 'Trabalho', done: false},
    {name: 'Estudar para a próxima reunião', category: 'Trabalho', done: false},
    {name: 'Enviar email sobre o problema', category: 'Trabalho', done: false},
    {name: 'Levar pó de café', category: 'Trabalho', done: true},
    {name: 'Comprar canetas novas', category: 'Trabalho', done: true},
    {name: 'Estudar Etapa 1', category: 'Faculdade', done: true},
    {name: 'Estudar Etapa 2', category: 'Faculdade', done: true},
    {name: 'Estudar Etapa 3', category: 'Faculdade', done: false},
    {name: 'Fazer TP1', category: 'Faculdade', done: false}
    ];

    $rootScope.addTask = function(task){ 

        var items = $rootScope.tasks
        add = true;
        for(item of items){
            if(item.name === task.name && item.category == task.category){
                add = false;
                break;
            }
        }

        // function isKeyInObject(obj, key) {
        //     var res = Object.keys(obj).some(v => v == key);
        //     console.log(res);
        // }

        // var keyExists = isKeyInObject(items[0], task);

        if (add) {

            $rootScope.tasks.push(angular.copy(task));
            delete $rootScope.task;
            console.log(task.name); 
        }

        
    }
}]);