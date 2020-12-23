import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = ()=>{
   // const categories = ['One puch', 'DBZ','Pokemon'];
   const [categories, setCategorias] = useState( ['Pokemon']);
//    const handleAdd = () =>{
//        // setCategorias([...categories,'HunterXHunter']);
//        setCategorias(cats => [...categories,'HunterXHunter']);
//    };
    return (
        <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategorias }/>
    <hr/>
 
    <ol>
        {
        categories.map(x=>(
           <GifGrid 
           key={x}
           category={x}
           />
        ))
        }
    </ol>
   
    </>
    )

};