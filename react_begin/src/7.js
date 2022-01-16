import {useEffect, useState} from "react";


function App(){
    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([]);//기본 : 비어있는 array

    const onChange = (event)=>settodo(event.target.value)
    const onSubmit = (event)=>{
        event.preventDefault();
        //화면 넘어가는거 막음.
        
        if (todo ===""){
            return;
            //todo에 암것도 없으면, 함수 끝냄!
        }
       
        settodos((prev)=>[todo, ...prev]);
        //todos array에 todo추가 해줘야함!! 이전에 있는것도 유지한채!
        //food = [1,2,3] 에서 6을 추가하려면
        //food = [...food, 6] 해줘야함!

        settodo("");//값 비워줌
        
        //todo = "aa"처럼, state를 직접 수정안하고 settodo()함수를 씀!!
    }

    console.log(todos)
    
    return <div>
        <h1>my todo({todos.length})</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value = {todo} type="text" placeholder="write yout"/>

            <button>add to do</button>
        </form>

        
    </div>;

}

export default App;