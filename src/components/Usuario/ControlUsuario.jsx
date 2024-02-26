import { useState } from "react";
import Login from "./Login";
import Registro from "./Registro";

export function ControlUsuario(){

    const [registrar,setRegistrar] = useState(false)
    const [nombre,setNombre]=useState("")
    const [password,setPassword]= useState("");


   return(
        <>
            {registrar?<Registro setRegistrar={setRegistrar} nombre={nombre} password={password} setNombre={setNombre} setPassword={setPassword}/>:<Login nombre={nombre} password={password}setRegistrar={setRegistrar} setNombre={setNombre} setPassword={setPassword}/>}
           
        </>
   )
}