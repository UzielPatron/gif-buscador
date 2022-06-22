import {  useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// esto es un custom Hook
export const useFetchGifs = categoria => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    //useEffect es un hook de react que sirve para disparar efectos secundarios ( procesos que queremos ejecutar cuando algo suceda );
    //recibe dos parámetros, un callback con la accion a ejecutar y las dependencias ( los parámetros por los cuáles volveremos a ejecutar el callback )
    useEffect( () =>{
        getGifs( categoria ).then( newImages => {
            setImages( newImages );
            setIsLoading( false );
        });       
    }, []);

    return ({
        images,
        isLoading
    })
};