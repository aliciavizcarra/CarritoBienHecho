import { useState } from "react";
import Registro from "./Registro";
import Login from "./Login";

export function ControlUsuario({usuario,setUsuario}){

    const [registrar,setRegistrar] = useState(false)
    const [nombre,setNombre]=useState("")
    const [password,setPassword]= useState("");

//En el Control de Usuarios si el registrar es false comprueba si hay un usuario en el isLogin
   return(
        <> 
            {registrar?<Registro 
            setRegistrar={setRegistrar} 
            nombre={nombre} 
            password={password}
             setNombre={setNombre} 
             setPassword={setPassword}/>:
             <Login nombre={nombre} 
             password={password}
             setRegistrar={setRegistrar}
             setNombre={setNombre}
             setPassword={setPassword} 
             setUsuario={setUsuario} 
             usuario={usuario}/>}
           
        </>
   )
}