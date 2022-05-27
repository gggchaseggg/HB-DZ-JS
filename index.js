// 1. Удалите из массива дубликаты: const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]; 
let arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
arr = [...(new Set(arr))];
console.log(arr);

// 2. Объедините 2 объекта в один: const obj1 = { id: 1, name: ‘userName’ } и const obj2 = { id: 1, password: ‘qwerty’ } 
const obj1 = { id: 1, name: 'userName' }
const obj2 = { id: 1, password: 'qwerty' }

const obj3 = {...obj1, ...obj2 };
console.log(obj3);

// 3. Сократите объявление функции в одну строку, используя новый синтаксис ES6: const add = function (x, y) { return x + y } 
const add = (x, y) => x + y;
console.log(add(1, 2));

// 4. Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой
//Функция, которую нужно реализовать: 
// const sleep = ms => { ... } 
// Её использование для выполнения действия с задержкой 5 секунд 
// sleep(5000).then(() => { console.log('Выполнилось через 5 секунд!');});

const sleep = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

sleep(5000).then(() => { console.log('Выполнилось через 5 секунд!') });