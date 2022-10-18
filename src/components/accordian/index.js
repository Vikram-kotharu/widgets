import React from "react"
import { useState } from "react"

const Accordian = (props) =>{
    const {items} = props
    const [active, setActive] = useState(null)
    const called = (index) =>{
        console.log('clicked',index)
     
        setActive(index)
    }
    const con = items.map((item,index) => {
        const status = index === active?'active':''
        return <React.Fragment key={item.title}>
            <div className={'title' +status} onClick={()=>{called(index)}}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={"content" +status}>
                <h5>{item.content}</h5>
            </div>
        </React.Fragment>
    })
    return(
        <>
        <br/>
         <div className="ui styled accordion">
         {con}
         

         </div>
         
         
            
        </>
    )
}

export default Accordian