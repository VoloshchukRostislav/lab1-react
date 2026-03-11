import { useState } from "react";
import AddStudentForm from "./AddStudentForm";
import "./App.css";

function App() {

  const [students, setStudents] = useState([
    { id: 1, name: "Іван", score: 80 },
    { id: 2, name: "Марія", score: 55 },
    { id: 3, name: "Олег", score: 70 }
  ]);

  const addStudent = (student) => {

    setStudents([
      ...students,
      student
    ]);

  };

  return (

    <div className="app">

      <h1>Список студентів</h1>

      <AddStudentForm onAddStudent={addStudent} />

      <h2>Студенти</h2>

      <ul>

        {students.map((student) => (

          <li key={student.id}>

            {student.name}

            {" - "}

            {student.score}

            {" "}

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

          </li>

        ))}

      </ul>

    </div>

  );

}

export default App;