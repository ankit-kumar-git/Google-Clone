import {useState,useEffect} from 'react'
//Importing the key that we created
import API_KEY from './keys'

//Below id search engine ID which tells it which search engine to search
const CONTEXT_KEY="70ddfda6cbcf8dd0c";

const useGoogleSearch=(term)=> {
    const [data,setData]=useState(null);

    useEffect(()=>{
          const fetchData=async()=>{
              fetch(
                  `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                
              )
              .then((response) => {
                  response.json().then((result)=>{
                      setData(result)
                  })
              
          })
        }

          fetchData();
    },[term])
   
    return {data}  /*Returns that updated data as a object*/
}

export default useGoogleSearch
