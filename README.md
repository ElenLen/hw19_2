# hw19_2

Воспользуемся открытым API — JSONplaceholder. От этого API можно получить тестовые данные: строки, данные пользователя, набор постов. И все они будут лишены смысла — это идеально для тренировки.

Нужно получить с сервера список постов и отобразить его на странице.

Создайте функции:

получает на вход объект поста и возвращает строку HTML-разметки;
добавляет полученную разметку в полученный контейнер;
делает GET запрос по адресу https://jsonplaceholder.typicode.com/posts и добавит их на страницу (для этого примените метод forEach и функции созданные ранее).
