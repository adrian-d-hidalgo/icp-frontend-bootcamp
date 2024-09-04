import { useState } from "react";
import "./Form.css";

function Form() {
    const [formValues, setFormValues] = useState({
        text: "",
        password: "",
        date: "",
        number: "",
        select: "1",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario adopte el comportamiento por defecto
        console.log(formValues); // Muestra los valores del formulario en la consola del navegador
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                value={formValues.text}
                onChange={handleChange}
                placeholder="Texto"
            />
            <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Contraseña"
            />
            <input
                type="date"
                name="date"
                value={formValues.date}
                onChange={handleChange}
            />
            <input
                type="number"
                name="number"
                value={formValues.number}
                onChange={handleChange}
                placeholder="Número"
            />
            <select name="select" value={formValues.select} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;