import { useEffect, useState } from "react";
import BarraBusqueda from "./BarraBusqueda";
import ArticulosDisponibles from "./ArticulosDisponibles";
import URL_SERVER from "../../constantes";
import Cesta from "./Cesta";

export default function ControlArticulos({usuario}){
    
    const [articulosDisponibles,setArticulosDisponibles]= useState([]);
    const [actualizarArticulos, setActualizarArticulos]= useState(true);
    const [filterText,setFilterText]= useState("")
    const [cesta,setCesta]= useState([])

    useEffect(()=>{
        fetch(URL_SERVER+`cesta?usuario=${usuario}`)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
        })
        .then((data)=>{
            setCesta(data)
        })
    },[cesta])

    useEffect(()=>{
        fetch(URL_SERVER+`articulos?nombre_like=${filterText}&_sort=nombre&_order=asc`)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setArticulosDisponibles(data);
        })
        setActualizarArticulos(false);
    },[filterText,actualizarArticulos])
   

    return(
        <>
            <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
            <ArticulosDisponibles articulosDisponibles={articulosDisponibles} setActualizarArticulos={setActualizarArticulos} usuario={usuario}/>
            {usuario? <Cesta cesta={cesta}/>: ""}
        </>
    )


}