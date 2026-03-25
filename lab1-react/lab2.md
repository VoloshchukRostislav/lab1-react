# Звіт з лабораторної роботи №2

**Тема:** Реалізація стрічки новин або списку об'єктів.
**Посилання на GitHub-репозиторій:** [https://github.com/VoloshchukRostislav/lab1-react.git]
**Посилання на живу сторінку (GitHub Pages):** [https://voloshchukrostislav.github.io/lab1-react/]

## 1. Фрагмент коду з App.jsx (використання методу .map())



```jsx
{postsData.map((post) => (
  <Post
    key={post.id}
    author={post.author}
    content={post.content}
    date={post.date}
    avatar={post.avatar}
  />
))}