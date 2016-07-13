
class Task {
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }

    //чтение
    get done() {
        return this._done === true ? 'Выполнена' : 'Не выполнена';
    }

    //запись
    set done(value) {
        if(value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Ошибка! Укажите значение true или false');
        }
    }

    complite() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }

    //Статический метод
    static getDefaultTitle() {
        return 'Задача';
    }
}

//Статическая переменная
Task.count = 0;

let task = new Task('Убрать комнату');

console.log(task.done);

task.complite();

console.log(task.done);