"use strict";

// смотрим, какая инфо в апи
fetch("https://jsonplaceholder.typicode.com/posts")
  // преобразов в json
  .then((response) => {
    return response.json();
  })
  // находим и выводим нужный элемент
  .then((post) => {
    post.forEach((element) => {
      console.log(element);
      document.getElementById("post").innerHTML += `
        <div class="postList">
          <p class="title">Заголовок: ${element.title}</p>
          <p class="body">Статья: ${element.body}</p>
        </div>`;
    });
  })
  // обработка ошибки
  .catch((error) => console.log(error));
