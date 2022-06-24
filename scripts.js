const html = document.querySelector(".page-wrapper");
const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-git");
const articlesContainer = document.querySelector(".js-articles");
const infoContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const darkThemeCheckbox = document.querySelector(".js-dark-theme");

if (localStorage.getItem("darkTheme") === '1') {
    html.classList.add("dark-theme");
    searchInput.classList.add("dark-theme");
    infoContainer.classList.add("dark-theme");
    darkThemeCheckbox.setAttribute("checked", "checked");
}

darkThemeCheckbox.addEventListener("change", (data) => {
    if (darkThemeCheckbox.checked) {
        localStorage.setItem("darkTheme", 1);
        html.classList.add("dark-theme");
        searchInput.classList.add("dark-theme");
        infoContainer.classList.add("dark-theme");
    } else {
        localStorage.setItem("darkTheme", 0);
        html.classList.remove("dark-theme");
        searchInput.classList.remove("dark-theme");
        infoContainer.classList.remove("dark-theme");
    }
});

loadBtn.addEventListener("click", (evt) => {
    resultsContainer.innerHTML = '';
    articlesContainer.innerHTML = '';
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