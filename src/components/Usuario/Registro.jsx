import URL_SERVER from "../../constantes"

export default function Registro({setRegistrar, nombre, password, setNombre, setPassword}){

    function registrarse(nombre,password){

        const usuario = {
            nombre:nombre,
            password: password
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(usuario)
        }

        fetch(URL_SERVER+`usuarios`,options)
        .then((response)=>{
            if(response.ok){        
                setRegistrar(false)
                console.log("Usuario registrado con éxito")
                return response.json()
            }
        })


    }


    return(
        <>
            <input placeholder="nombre" type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
            <input placeholder="contraseña" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={()=>registrarse(nombre,password)}>Registrarme</button>
        </>
    )
}