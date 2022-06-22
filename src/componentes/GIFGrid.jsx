import { GIFItem } from "./GIFItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GIFGrid = ({ categoria, onEliminarCategoria }) => {
    
    const { images, isLoading } = useFetchGifs( categoria );

    const eliminarCategoria = () => {
        onEliminarCategoria( categoria )
    }


    return (
        <>
            <div className="categoria-contenedor"> <h3>{ categoria } </h3><button onClick={ eliminarCategoria } >Eliminar Categoria</button></div>
            {
                isLoading && <h2>Cargando...</h2>
            }
            {
                (images.length < 1 && isLoading == false) ? <h2>{ 'No se han encontrado Gifs :(' }</h2> : null
            }
            <div className="card-grid">
                { images.map( ( image ) => (
                    <GIFItem
                    key={ image.id }
                    { ...image }
                    />
                ) ) }
            </div>
        </>
    )   
};