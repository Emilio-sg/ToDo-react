import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ agregarTarea }) => {
  const [tareaForm, setTareaForm] = useState({
    id: "",
    title: "",
    description: "",
    state: 'pendiente',
    priority: false,
  });

  const {title, description, state, priority} = tareaForm;

const enviarFormulario = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese los datos!",
            
          });
        return
    }
    agregarTarea({
      title: title,
      description: description,
      state: state === "completado" ? true : false,
      priority: priority,
      id: Date.now(),
    })


    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tarea enviada correctamente",
        showConfirmButton: false,
        timer: 1500
      });
}

  return (
    <>
      <form onSubmit={(e) => enviarFormulario(e)}>
        <input
          type="text"
          placeholder="ingrese tarea"
          className="form-control mb-2"
          name="title"
          value={tareaForm.title}
          onChange={(e) => setTareaForm({...tareaForm, title: e.target.value})}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese Descripcion"
          name="description"
          value={tareaForm.description}
          onChange={(e) => setTareaForm({...tareaForm, description: e.target.value})}
        ></textarea>
        <select className="form-select mb-2" name="state" value={tareaForm.state} onChange={(e) => setTareaForm({...tareaForm, state: e.target.value})} >
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" name="priority" checked={tareaForm.priority} onChange={(e) => setTareaForm({...tareaForm, priority: e.target.checked})}  />
          <label className="form-check-label">Prioridad</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
