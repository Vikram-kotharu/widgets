import React, { useState, useEffect } from 'react';
import axios from 'axios'
const SearchBar = () =>{


    const [fvalue,setFvalue] = useState('python')
    const [results,setResults] = useState([])

    console.log(results)


    useEffect(()=>{
        
        const sdata = async() =>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
            {
                params: {
                    action: 'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:fvalue,
                },
            }
            )
            setResults(data.query.search)
        }
        setTimeout(()=>{
            if(fvalue){
                sdata()
    
            }

        },500)
        
        
    }, [fvalue]);

    const exp = results.map(item =>{
        return (
      
            <div key={item.pageid} >
                <h3>{item.title}</h3>
                <div className='d-flex flex-row'>
                <p dangerouslySetInnerHTML={{__html:item.snippet}}></p>
                <a href={`https://en.wikipedia.org/wiki/${item.title}`}><span className="badge badge-warning ml-2">GO</span></a>
                

                </div>
                

            </div>
        )
    })

    return(
        <>
        <div className="container">
            <div className="row">
                <label>Enter search term</label>
                <input className="form-control" type='text' placeholder="search" value={fvalue} onChange={(e)=>{setFvalue(e.target.value)}} />
                {exp}
            </div>
        </div>

        </>
    )
}

export default SearchBar