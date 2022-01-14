import { func } from "prop-types";
import {useEffect, useState} from "react";
//6_4.html
function Hello(){
    function destrotFn(){
      console.log("destroyed :(")
    }
    function effectFn(){
      console.log("created :)");
      return destrotFn;
    }
    useEffect(effectFn,[])
        //clean up funcion이란??
        //컴포넌트가 파괴될때!! 수행되는 function!!
    return <h1>hello</h1>
}

function App() {
  const [showing, setShowing] = useState("false");
  const onClick = () =>{
    setShowing((prev)=>!prev)
  }

  return (
    <div>
        {showing? <Hello/> : null}
        <button onClick = {onClick}>
            {showing ? "Hide" : "Show"}
        </button>
    </div>
  );

 
}

export default App;
