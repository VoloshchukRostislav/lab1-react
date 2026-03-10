# Звіт з лабораторної роботи №1

**Тема:** Створення каркаса додатка та базових UI-компонентів.
**Посилання на GitHub-репозиторій:** [https://github.com/VoloshchukRostislav/lab1-react.git]

## 1. Фрагмент коду (Реалізація компонента Input)

```jsx
import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, label }) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default Input;