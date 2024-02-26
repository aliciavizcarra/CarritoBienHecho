import { useState } from "react"
import { ControlUsuario } from "./components/Usuario/ControlUsuario"
import ControlArticulos from "./components/Articulos/ControlArticulos"
import Bienvenida from "./components/Usuario/Bienvenida"

function App() {
 
  const [usuario,setUsuario]= useState(null)

  return (
    <>
      {usuario?<Bienvenida usuario={usuario} setUsuario={setUsuario}/>: <ControlUsuario usuario={usuario} setUsuario={setUsuario}/>}<br></br><br></br><br></br>
      <ControlArticulos usuario={usuario}/>
    </>
  )
}

export default App
