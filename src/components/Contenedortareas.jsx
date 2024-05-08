import React from "react";
import Tareas from "./Tareas";

const Contenedortareas = ({ tareas, eliminarTarea, editarTarea }) => {
  return (
    <ul>
      {tareas.length === 0 ? (
        <div className="text-primary">No hay Tareas</div>
      ) : (
        tareas.map((item) => (
          <Tareas
            key={item.id}
            item={item}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
          />
        ))
      )}
    </ul>
  );
};

export default Contenedortareas;
