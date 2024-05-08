import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { useState } from "react";
import Contenedortareas from "./components/Contenedortareas";
import Formulario from "./components/Formulario";


const tareasIniciales = [

];

function App() {
  const [tareas, setTarea] = useState(tareasIniciales);

  const agregarTarea = (tarea) => {
    setTarea([...tareas, tarea])

  }
  const eliminarTarea = (id) => {
    const arrFiltrado = tareas.filter((item) => item.id !== id)
    setTarea(arrFiltrado)
  }

  const editarTarea = (id) => {
    const arrActualizado = tareas.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    })
    setTarea(arrActualizado)

  }

  return (
    <div className="container my-2">
      <h2 className="text-primary">Formulario</h2>
      <Formulario agregarTarea={agregarTarea} />
      <h2 className="text-primary text-center">Tareas</h2>
      <Contenedortareas eliminarTarea={eliminarTarea} editarTarea={editarTarea} tareas={tareas} />
    </div>
  );
}

export default App;
