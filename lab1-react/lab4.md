# Лабораторна робота №4

## Посилання

Репозиторій:
https://github.com/VoloshchukRostislav/lab1-react

Деплой:
https://lab1-react-three.vercel.app

---

# Структура маршрутів

Додаток використовує багаторівневу навігацію на базі React Router v6.

Основні сторінки:

/ — головна сторінка

/feed — стрічка новин

/feed/:postId — сторінка окремого поста

/profile — профіль користувача

/profile/settings — налаштування профілю

* — сторінка 404

---

# Конфігурація BrowserRouter

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>