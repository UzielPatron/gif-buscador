export const getGifs = async category => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fmLZ3Q5F3AzGaXkWNe4pDwS6E3Prubud&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return ({
            id: img.id,
            title: img.title,
            url: img.images.fixed_height_small.url
        } )
    } );


    return gifs;
};