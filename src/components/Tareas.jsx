import React from "react";

const Tareas = ({item, eliminarTarea, editarTarea}) => {
  const { title, description, priority, state, id } = item;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-2 ">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {title}

          {state === false ? (
            <span className="badge bg-primary rounded-pill ms-5">pendiente</span>
          ) : (
            <span className="badge bg-success rounded-pill ms-5">completado</span>
          )}
        </div>

        <p>{description}</p>
        <div>
          <button className="btn btn-sm btn-danger me-1" onClick={() => eliminarTarea(id)}>Eliminar</button>
          <button className="btn btn-sm btn-warning me-1" onClick={() => editarTarea(id)}>Editar</button>
        </div>
      </div>
      {priority === true ? (
        <span className="badge bg-primary rounded-pill">prioritario</span>
      ) : (
        <span className="badge bg-warning rounded-pill">no prioritario</span>
      )}
    </li>
  );
};

export default Tareas;
