import Btn from './Btn';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>welcome</h1>
      <Btn text = "continue"/>
    </div>
  );
}

export default App;
