
import { useState } from "react";
import Accordian from "./components/accordian";
import SearchBar from "./components/searchbar";
import DropDown from "./components/DropDown";
const items = [
  {
    title:"what is react?",
    content:"React is js library"
  },
  {
    title:"what is Js?",
    content:"js is single threaded , synchronous language"
  },
  {
    title:"what is mongoDb?",
    content:"mongoDb is No-sql database"
  }
]

const options = [
  {
    label: "The Color Red",
    color: "red"
  },
  {
    label: "The Color Green",
    color: "green"
  },
  {
    label: "The Color Blue",
    color: "blue"
  }
]
const App = () =>{
  const [stat,setStat] = useState('yes')
  return(
    <>
    
      <div className="d-none">
      {stat==='yes'?<SearchBar/>:<Accordian items = {items}/>}
      </div>
      <DropDown options={options}/>
      
    </>
  )
}

export default App;
