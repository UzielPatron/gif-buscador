import { useState } from 'react';

const upperCamelCase = palabra => {
    const resultado = palabra.split(' ');
    for( let i = 0; i < resultado.length; i++) {
        resultado[i] = resultado[i][0].toUpperCase() + resultado[i].substring(1);
    }
    resultado.join(' ');
    return resultado.toString().replaceAll(',',' ');
}

export const AddCategoria = ({ onNuevaCategoria, onEliminarTodo }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = event => {
        setInputValue( event.target.value );
    };

    const onSubmit = event => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if( newInputValue.length <= 1) return;
        
        const inputValueFinal = upperCamelCase( newInputValue );

        onNuevaCategoria( inputValueFinal );
        setInputValue( '' );
    };
    
    return (
        <div className="form-and-button">
            <form onSubmit={ onSubmit } >
                <input
                    type='text'
                    value={ inputValue }
                    placeholder='Buscar Gifs'
                    onChange= { onInputChange }
                />
            </form> 
            <button onClick={ onEliminarTodo }>Eliminar Todas Las Categorias</button>
        </div>
    );
};