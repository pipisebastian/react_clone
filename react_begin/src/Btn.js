import PropTypes from "prop-types"
import styles from "./Button.module.css"
//module을 사용하면 css에서 class가 중첩되는거 막음!!

  function Btn({text}) {
    return (
      <button 
      className = {styles.btn}
      //자바스크립트 object는 btn을 안에 가지고 있음!!
      //<button class="Button_btn__UXdbG">continue</button> 처럼
      //classname을 알아서 설정해줌!! react에서!!
      >{text}</button>
    );
  }
  
  //type정의!!
  Btn.propTypes = {
      text : PropTypes.string.isRequired,
  }
  
  export default Btn;
  