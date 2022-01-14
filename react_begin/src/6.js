import {useEffect, useState} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setkey] = useState("");

  const onClick=()=>setValue((prev)=>prev+1)
  const onChange=(event)=>setkey(event.target.value)
  //2. input text에 칠때마다, App 렌더링 되서 all time출력됨.

  console.log("all");
  //console.log("search for ",keyword);
  //3. counter, keyword가 바뀔때마다 실행되는데,
  //둘중에 하나가 바뀌더라도 둘다 수행됨.
  //keyword 를 바꿀때만 search for 이 뜨도록 할거임!!

  useEffect(()=>{
    console.log("i run when keyword change");
    //4. keyword바꿀때만 이게 뜨게!!
    
  },[keyword])

  useEffect(()=>{
    console.log("i run when counter change");
    //4. counter 이게 뜨게!!
    
  },[counter])
  //[counter,keyword] 둘중에 하나가 실행될경우.
 
  useEffect(()=>{
    console.log("only once!!");
  },[])
  //오직 한 번만!


  return (
    <div>
      <input type = "text" 
      value = {keyword}
      onChange={onChange}
      placeholder="search here..."></input>
      

      <h1>{counter}</h1>

      <button onClick={onClick}>
        click me
      </button>
    </div>
  );
  //ex) 1. api를 호출한다면, 한번 호출하면 할 필요 없음
  //근데 우린 state가 바뀌면 계속 컴포넌트가 호출됨.
  //처음 딱 한번만 호출하려면 어떻게 해야하나???
  //useEffect!!

  //어떤 state가 변함에 따라, 그 state만 
}

export default App;
