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
        }
       
        settodos((prev)=>[todo, ...prev]);
       

        settodo("");//값 비워줌
    }

    console.log(todos)
    
    return <div>
        <h1>my todo({todos.length})</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value = {todo} type="text" placeholder="write yout"/>

            <button>add to do</button>
        </form>
        <hr />
        <ul>
            {todos.map((item,index) => (<li key={index}>{item}</li>))}

        </ul>  
    </div>;
    //map : 자바스크립트 function임! 리액트께 아니고
    //map이란? array의 
    // [].map(()=>"1") : array다 1로 바꿈
    // [].map((item)=>item.toUpperCase) : item(array안 변수들) 모두 대문자로 바꿔줌/

    //내가 할건, item들을 다 component로 다 바꿔줄 거임!!
//{todos.map((item) => (<li>{item}</li>))}

//근데 item을 모두 같은걸로 인식하기때문에 , key를 넣어 구별해줄거임!
//map의 2번째 인자가 index를 가져오는데, 그걸 key로 넣어주면 됨!

}

export default App;