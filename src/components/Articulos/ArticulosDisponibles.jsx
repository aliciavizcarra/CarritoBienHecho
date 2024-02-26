import { useDebugValue } from "react"
import URL_SERVER from "../../constantes"

export default function ArticulosDisponibles({articulosDisponibles,usuario}){

    function agregarCarrito(articulo){

        fetch(URL_SERVER+`cesta?usuario=${usuario}&nombre_like=${articulo.nombre}`)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
        })
        .then((data)=>{

            console.log(data)

            if(data.length>0){

                const articuloNuevo = {
                    nombre:articulo.nombre,
                    precio: articulo.precio,
                    unidades: data[0].unidades + 1,
                    usuario:usuario
                }

                fetch(URL_SERVER+`cesta/${data[0].id}`,{
                    method:"PUT",
                    headers: {
                        "Content-type" : "application/json"
                    },
                    body: JSON.stringify(articuloNuevo)

                })

            }else{
                const articuloNuevo = {
                    nombre:articulo.nombre,
                    precio: articulo.precio,
                    unidades: 1,
                    usuario:usuario
                }
        
                const options = {
                    method: "POST",
                    headers: {
                        "Content-type" : "application/json"
                    },
                    body: JSON.stringify(articuloNuevo)
                }
        
                fetch(URL_SERVER+`cesta`, options)
                .then((response)=>{
                    if(response.ok){
                        return response.json();
                    }
                })
                .then((data)=>{
                    console.log(data)
                })
            }
        })




       

    }
    
    return(
        <>
            <h1>Articulos Disponibles</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {articulosDisponibles.map((articulo)=>{
                    return(
                        <tr key={articulo.id}>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.unidades}</td>
                            <td>{usuario? <button onClick={()=>{agregarCarrito(articulo)}}>Añadir al carrito</button>: " "}</td>
                        </tr>
                    ) 
                    })}
                </tbody>
            </table>
        </>
    )
}