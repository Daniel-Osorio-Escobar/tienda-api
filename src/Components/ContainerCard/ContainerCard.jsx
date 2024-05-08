import {React,useState,useEffect} from 'react'
import { Card } from '../Card/Card'
export const ContainerCard = () => {

  const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
 
   
  return (
  
  
        <div className="bg-slate-700 w-10/12 flex flex-wrap justify-evenly text-white ">

         {posts.map((post) => {
         return (
            <div className="bg-slate-500 w-80 my-3 flex flex-col mx-2" key={post.id}>
              <img className='h-56' src={post.image} alt="" />
               <h2 className="h-16">{post.title}</h2>
               <p className="h-7">{post.category}</p>
               <p className="bg-amber-900 text-sm h-96">{post.description}</p>
               <p className="float-start">{post.price}</p>
               <button className='bg-amber-200 text-zinc-50'>Comprar</button>
            </div>
         );
      })}
   </div>
  
  )
}
