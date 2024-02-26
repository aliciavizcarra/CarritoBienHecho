import { useState } from "react"
import { ControlUsuario } from "./components/Usuario/ControlUsuario"
import ControlArticulos from "./components/Articulos/ControlArticulos"

function App() {
 
  const [usuario,setUsuario]= useState(null)

  return (
    <>
      <ControlUsuario usuario={usuario} setUsuario={usuario}/>
      <ControlArticulos usuario={usuario}/>
    </>
  )
}

export default App
