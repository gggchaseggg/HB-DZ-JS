// 1.Напишите с помощью изученной конструкции try/catch простую валидацию инпута для числового значения.
// Если поле пустое, текстовое содержимое не является числом, или значение меньше 5 или больше 10 —
// пробросьте ошибку с соответствующим текстом. Чтобы пользователю было понятен текст ошибки,
// выводите текст ошибки в абзац под инпутом.
const form = document.querySelector('.forma');
const input = form.querySelector('.text');
const err = document.querySelector('.input_info');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
        let value = input.value;

        if (value === '') {
            throw new Error('Пустой инпут');
        } else {
            value = Number.parseInt(value)
            if (Number.isNaN(value)) {
                throw new Error('Введите число');
            } else if (value < 5 || value > 10) {
                throw new Error('Вы ввели не правильное число')
            } else {
                err.textContent = 'Вроде все хорошо';
            }
        }
    } catch (error) {
        err.textContent = error.message;
    }

})

// 2.Переписать пример лотереи на async/await.
// ( https://codesandbox.io/s/quirky-brown-suemou?file=/src/index.js )
function lottery() {
    console.log("Вы начали игру");
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
        }, 1000);
    });
    return promise;
}

const start = async() => {
    try {
        await lottery();
        console.log("Вы выиграли - 300$")
    } catch (error) {
        console.log("Вы проиграли")
    }
}