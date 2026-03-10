import { students } from "./data";

function App() {

  // Фільтрація активних студентів з балом > 60
  const activeStudents = students.filter(
    student => student.active && student.score > 60
  );

  // Середній бал активних студентів
  const averageScore =
    activeStudents.reduce((sum, student) => sum + student.score, 0) /
    activeStudents.length;

  // Сортування студентів
  const sortedStudents = [...students].sort(
    (a, b) => b.score - a.score
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>Список студентів</h1>

      <ul>
        {students.map(student => (
          <li
            key={student.id}
            style={{
              color: student.active ? "black" : "gray",
              textDecoration: student.active ? "none" : "line-through"
            }}
          >
            {student.name} — {student.score}
          </li>
        ))}
      </ul>

      <h2>Активні студенти (бал більше 60)</h2>

      <ul>
        {activeStudents.map(student => (
          <li key={student.id}>
            {student.name} — {student.score}
          </li>
        ))}
      </ul>

      <h2>Статистика</h2>

      <p>
        Середній бал активних студентів: {averageScore.toFixed(2)}
      </p>

      <h2>Студенти за рейтингом</h2>

      <ul>
        {sortedStudents.map(student => (
          <li key={student.id}>
            {student.name} — {student.score}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;