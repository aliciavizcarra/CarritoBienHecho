import { useEffect, useState } from "react"
import URL_SERVER from "../../constantes"

export default function Cesta({cesta}){

    function eliminarCesta(articulo){
        fetch(URL_SERVER+`cesta/${articulo.id}`,{
            method: "DELETE"
        })
        .then((response)=>{
            if(response.ok){
                console.log("Articulo borrado correctamente")
            }
        })
    }

    return(
        <>
            <h1>Cesta</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {cesta.map((articulo)=>{
                    return(
                        <tr key={articulo.id}>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.unidades}</td>
                            <td><button onClick={()=>eliminarCesta(articulo)}>Eliminar de la cesta</button></td>
                        </tr>
                    ) 
                    })}
                </tbody>
            </table>
        </>
    )
}