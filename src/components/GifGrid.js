import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React , { useState , useEffect} 
//import { getGifs } from '../helpers/GetGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid =({category}) =>{
    // const [imges, setImges] = useState([])
    const {data:images,loading} = useFetchGifs(category);
    
    // useEffect(()=>{
    //     getGifs(category)
    //     .then(img => setImges(img));
    // },[category]);
  
    
return(
    <>  
    <h3 className='animate__animated animate__fadeIn'>{category}</h3>
    { loading && <p className='animate__animated animate__flash'>Loading...</p>  }
    <div className='card-grid'>

        
        
        {
            images.map(img => (
                <GifGridItem  
                            key={img.id}
                            {...img}
                            />
                            
            )
            )
     }
    </div>
    </>
)
};