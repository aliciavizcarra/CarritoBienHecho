export default function Bienvenida({usuario,setUsuario}){

    function cerrarSesion(){
        setUsuario(null)
    }


    return(
        <>
            <h1>Bienvenido/a {usuario}</h1>
            <button onClick={()=>{cerrarSesion()}}>Cerrar Sesion</button>
        </>
    )
}