import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home"
function App(){
    return (
    <Router>
        <Switch>
            <Route path = "/hello">
                <h1>HELLO!</h1>
            </Route>
            <Route path = "/movie/:id">
                <Detail />
            </Route>

            <Route path = "/">
                <Home />
            </Route>
        </Switch>
    </Router>);
    
}
//switch 는 router를 찾음!!
//router: url을 의미.
//router안에 넣어준게 render되는거!!

//Link: 브라우저 새로고침 없이도 다른페이지로 이동.
//원래처럼 a link ="~" 이런건, 다 새로고침이 되버림.


export default App;