import React,{useRef,useState} from 'react'
import data from '../assets/Books.json'
import Booksdisplay from './Booksdisplay';
const Home = ({cart,setcart}) => {
    const [book]=useState(data);

const[userbooks,setuserbooks]=useState([]);
const inputRef=useRef();

const addTask=()=>{
            const input=inputRef.current.value.trim();
        if(input===""){
            return null;
        }
        const newlist={
            id:Date.now(),
            text: input,
                      
        };
    
        setuserbooks((prev)=>[...prev,newlist]);
        inputRef.current.value="";
    }







  return (
    <div>
        <h1>add books</h1>
        <button onClick={addTask} >add task</button>
        <input ref={inputRef} type="text" placeholder='enter your book name'/>
<fieldset>
        {userbooks.map((name,index)=>(
            
                <div key={index}>          
              <p> name={name.text}</p> </div>  
                
            
        ))}
</fieldset>


      {book.map((product)=>(
 <Booksdisplay
 key={product.id}
 product={product}
 cart={cart}
 setcart={setcart}
 />
      ))
   }
        
      
    </div>
  )
}

export default Home
