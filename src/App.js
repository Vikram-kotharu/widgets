
import Accordian from "./components/accordian";

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

const App = () =>{
  return(
    <>
      <div>
      <Accordian items = {items}/>

      </div>
      
    </>
  )
}

export default App;
