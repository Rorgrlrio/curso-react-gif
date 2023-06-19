import React from 'react'
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (categorie) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
      const newImages = await getGifs(categorie);
      setImages(newImages);
      setIsLoading( false )
    }
    
    useEffect(() => {
        getImages();  
    }, [ ])

    return {
        isLoading: isLoading,
        images: images
    }
  
}//useFetchGif
