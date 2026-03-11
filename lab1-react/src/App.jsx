import { useState } from "react";
import "./App.css";

function App() {

  // стан для довідки
  const [showHelp, setShowHelp] = useState(false);

  // стан для фільтра
  const [filterActive, setFilterActive] = useState(false);

  // стан активного таба
  const [activeTab, setActiveTab] = useState("list");

  // масив студентів
  const students = [
    { id: 1, name: "Іван", score: 80 },
    { id: 2, name: "Марія", score: 45 },
    { id: 3, name: "Олег", score: 70 },
    { id: 4, name: "Анна", score: 55 },
    { id: 5, name: "Петро" } // приклад без score
  ];

  // фільтр студентів
  const filteredStudents = students.filter(
    (student) => student.score >= 60
  );

  return (
    <div className="app">

      <h1>Практична робота №3</h1>

      {/* КНОПКА ДОВІДКИ */}
      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? "Приховати інструкцію" : "Показати інструкцію"}
      </button>

      {/* УМОВНИЙ РЕНДЕРИНГ */}
      {showHelp && (
        <p>
          Довідка: Цей додаток демонструє умовне відображення
          в React (&&, ternary operator, tabs).
        </p>
      )}

      <hr />

      {/* ТАБИ */}
      <div className="tabs">

        <button
          className={activeTab === "list" ? "active-tab" : ""}
          onClick={() => setActiveTab("list")}
        >
          Всі студенти
        </button>

        <button
          className={activeTab === "stats" ? "active-tab" : ""}
          onClick={() => setActiveTab("stats")}
        >
          Статистика
        </button>

        <button
          className={activeTab === "about" ? "active-tab" : ""}
          onClick={() => setActiveTab("about")}
        >
          Про автора
        </button>

      </div>

      <div className="content">

        {/* TAB: СПИСОК */}
        {activeTab === "list" && (
          <div>

            <h2>Список студентів</h2>

            {/* КНОПКА ФІЛЬТРУ */}
            <button onClick={() => setFilterActive(!filterActive)}>
              {filterActive
                ? "Показати всіх"
                : "Показати тільки успішних"}
            </button>

            <ul>

              {(filterActive ? filteredStudents : students).map(
                (student) => (

                  <li key={student.id}>

                    {student.name}

                    {" - "}

                    {student.score ?? "Оцінка відсутня"}

                    {" "}

                    {student.score !== undefined && (
                      <span
                        style={{
                          color:
                            student.score >= 60
                              ? "green"
                              : "red"
                        }}
                      >
                        {student.score >= 60
                          ? "Зараховано"
                          : "Незараховано"}
                      </span>
                    )}

                  </li>
                )
              )}

            </ul>

            {/* EMPTY STATE */}
            {filterActive && filteredStudents.length === 0 && (
              <p>За вашим запитом нікого не знайдено</p>
            )}

          </div>
        )}

        {/* TAB: СТАТИСТИКА */}
        {activeTab === "stats" && (
          <div>

            <h2>Статистика</h2>

            <p>Кількість студентів: {students.length}</p>

            <p>
              Успішних студентів:{" "}
              {filteredStudents.length}
            </p>

          </div>
        )}

        {/* TAB: ПРО АВТОРА */}
        {activeTab === "about" && (
          <div>

            <h2>Про автора</h2>

            <p>Практична робота №3</p>
            <p>React + Vite</p>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;