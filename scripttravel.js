// script.js
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Пожалуйста, заполните все поля.');
    } else {
        // Здесь можно добавить код AJAX для отправки данных формы на сервер для аутентификации
        // Например, используя Fetch API или XMLHttpRequest
        // Если аутентификация успешна, вы можете перенаправить пользователя на другую страницу
        alert('Форма успешно отправлена!');
    }
}
