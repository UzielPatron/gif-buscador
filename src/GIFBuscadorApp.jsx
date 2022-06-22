import { useState } from "react";
import { AddCategoria, GIFGrid } from './componentes';

export const GIFBuscadorApp = () => {
    
    const [categorias, setCategorias] = useState(['']);

    const onAddCategoria = nuevaCategoria => {
        const lowerCase = [];
        for(let i = 0; i < categorias.length; i++) {
            lowerCase[i] = categorias[i].toLowerCase();
        }
        if ( lowerCase.includes( nuevaCategoria.toLowerCase() ) ) return alert('La categoria ya existe!');
        setCategorias( [ nuevaCategoria ,...categorias ] );
        
    };

    const onEliminarTodo = () => {
        setCategorias( [''] )
    }

    const onEliminarCategoria = categoria => {
        const nuevaCategorias = categorias.filter( val => val !== categoria );
        setCategorias( nuevaCategorias );
    };

    return (
        <>
            <h1>Buscador de Gifs</h1>
            <AddCategoria
                onNuevaCategoria={ onAddCategoria }
                onEliminarTodo= { onEliminarTodo }
             />

            { 
                categorias.map( ( categoria ) => ( 
                    ( categoria.length < 1) ?  null : <GIFGrid
                    key={ categoria }
                    categoria={ categoria }
                    onEliminarCategoria={ onEliminarCategoria }
                    />
                )) 
            }

        </>
    )
}


