const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-git");
const articlesContainer = document.querySelector(".js-articles");
const searchInput = document.querySelector(".js-input");


loadBtn.addEventListener("click", (evt) => {
    resultsContainer.innerHTML = '';
    evt.preventDefault();
    if (searchInput.value != '') {
        const searchValue = searchInput.value.trim().toLowerCase();
        fetch(`https://api.github.com/users/${searchValue}`)
            .then(response => response.json())
            .then((data) =>
                (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
              </div>`)
            );
    } else {
        resultsContainer.innerHTML = 'Пустой ввод'
    }
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            response.data.forEach(data => {
                if (data.userId == searchInput.value) {
                    articlesContainer.innerHTML += `<div class="response-container articles">
                    <p><h2 class="article-title">${data.title}</h2><p>
                    <p class="article-body">${data.body}<p>
                  </div>`
                }
            });
        })

});