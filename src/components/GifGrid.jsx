import { GifItem } from './GifItem';
import { useFetchGif } from '../hooks/useFetchGif';

export const GifGrid = ( { categorie } ) => {

    //useEffect es un hook que solo se aplica una vez si su 2do parametro es []
    //Pero no es compatible con funciones async dentro, debemos declararla fuera
    //Esta funcion obtiene el resultado de getGifs (array json), ocupa ser async porque getGifs tambien es async
    //Finalmente se lo pasamos al state, que es un array

    const { images, isLoading } = useFetchGif(categorie);

    /*const [images, setImages] = useState([]); TODO ESTO LO METEMOS EN EL HOOK PERSONALIZADO useFetchGifs

    const getImages = async() => {
      const newImages = await getGifs(categorie);
      setImages(newImages);
    }
    
    useEffect(() => {
        getImages();  
    }, [ ])*/
    
    

  return (
    <>
        <h3>{ categorie }</h3>

        {
          (isLoading 
          ? <h2>Cargando...</h2> 
            : <div className='card-grid'>
            {
              images.map( ( img ) => (
                <GifItem 
                  key={ img.id } 
                  { ...img } //A esto se le llama "esparcir" las propiedades, en lugar de desestructurar las properties una por una, se las pasamos todas de una
                />
              ))
            }
            </div>
          )
        }
        
    </>
  )
}
