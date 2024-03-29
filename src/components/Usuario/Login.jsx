
import URL_SERVER from "../../constantes"

export default function Login({setUsuario,setRegistrar, nombre, password, setNombre, setPassword}){

    function iniciarSesion(){
        fetch(URL_SERVER+`usuarios?nombre_like=${nombre}`)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
        })
        .then((data)=>{
            if (data.length > 0 && password === data[0].password) {
                const usuario = data[0].nombre;
                localStorage.setItem("usuario", JSON.stringify(data.nombre));
                setUsuario(usuario);
            }else{
                console.log("Contraseña incorrecta")
            }
        })
    }



    function registrarse(){
        setRegistrar(true)
    }

    return(
        <>
         <h1>Inicio Sesion</h1>
         <label>Nombre</label> 
         <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
         <label>Contraseña</label>
         <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
         <button onClick={()=>{iniciarSesion()}}>Iniciar Sesion</button>
         <h3>¿No estas registrado?</h3>
         <button onClick={()=>{registrarse()}}>Cambiar a registro</button>
        </>
    )
}