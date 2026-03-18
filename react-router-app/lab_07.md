# Практична робота №7

## Робота з URL-параметрами

---

## Мета

Навчитися працювати з URL-параметрами, реалізувати динамічні маршрути та синхронізувати стан додатку з адресним рядком.

---

## Використані технології

* React
* Vite
* React Router DOM

---

## Хід роботи

### 1. Динамічний маршрут

Було створено маршрут:

```jsx
<Route path="/post/:postId" element={<PostDetails />} />
```

---

### 2. Використання useParams

Отримання параметра з URL:

```jsx
const { postId } = useParams();
```

---

### 3. Пошук через URL

Використано хук useSearchParams:

```jsx
const [searchParams, setSearchParams] = useSearchParams();
```

---

### 4. Синхронізація з URL

При введенні тексту:

```jsx
setSearchParams({ query: value });
```

URL змінюється:

```
/?query=react
```

---

### 5. Фільтрація даних

```jsx
const filtered = postsData.filter((post) =>
  post.title.toLowerCase().includes(query.toLowerCase())
);
```

---

### 6. Сортування

Було додано select:

```jsx
<select value={sort}>
```

URL:

```
?query=react&sort=desc
```

---

## Відповіді на контрольні питання

### 1. Path vs Query

* Path (/post/1) — для конкретного ресурсу
* Query (?sort=asc) — для фільтрів

---

### 2. useParams

Отримує параметри з URL.
Потрібно використовувати `:param` у Route.

---

### 3. Чому URL краще за useState

* зберігається після перезавантаження
* можна поділитись посиланням
* зручно для користувача

---

### 4. filter і продуктивність

Так, виконується при кожному рендері.
Для оптимізації використовують useMemo.

---

### 5. Де зберігаються параметри

У стандартному JS:

* window.location.search
* URLSearchParams

React Router спрощує це через useSearchParams.

---

## Висновок

Було реалізовано роботу з URL-параметрами, динамічні маршрути, пошук та сортування з синхронізацією з адресним рядком.
