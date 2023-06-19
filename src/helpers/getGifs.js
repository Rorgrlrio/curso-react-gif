export const getGifs = async(categorie) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dWWSxSBmPgSQ3y4NziOa5jlw8NkUtq08&q=${ categorie }&limit=10`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log(gifs);
    return gifs;
}//getGifs