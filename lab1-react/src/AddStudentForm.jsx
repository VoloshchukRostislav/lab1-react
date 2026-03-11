import { useState } from "react";

function AddStudentForm({ onAddStudent }) {

  const [formData, setFormData] = useState({
    name: "",
    score: ""
  });

  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Ім'я є обов'язковим";
    } else if (values.name.length < 2) {
      errors.name = "Ім'я повинно містити мінімум 2 символи";
    }

    if (values.score === "") {
      errors.score = "Введіть бал";
    } else if (
      isNaN(values.score) ||
      values.score < 0 ||
      values.score > 100
    ) {
      errors.score = "Бал повинен бути від 0 до 100";
    }

    return errors;
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {

      onAddStudent({
        id: Date.now(),
        name: formData.name,
        score: Number(formData.score)
      });

      setFormData({
        name: "",
        score: ""
      });

      setErrors({});

    } else {

      setErrors(validationErrors);

    }

  };

  return (

    <form onSubmit={handleSubmit}>

      <h2>Додати студента</h2>

      <input
        type="text"
        name="name"
        placeholder="Введіть ім'я"
        value={formData.name}
        onChange={handleChange}
      />

      {errors.name && (
        <p style={{ color: "red" }}>{errors.name}</p>
      )}

      <input
        type="number"
        name="score"
        placeholder="0 - 100"
        value={formData.score}
        onChange={handleChange}
      />

      {errors.score && (
        <p style={{ color: "red" }}>{errors.score}</p>
      )}

      <button
type="submit"
disabled={!formData.name || !formData.score}
>
Додати студента
</button>

    </form>

  );

}

export default AddStudentForm;