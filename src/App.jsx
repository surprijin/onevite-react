import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

import Bulb from './components/Bulb'
import Counter from './components/Couter'
import Register from './components/Register'

  // react의 컴포넌트들이 rerendering 되는 조건 
  // 1. 자신이 관리하는 state 값이 변경 되었을때 
  // 2. 자신이 제공받는 props 값이 변경 되었을때
  // 3. 부모 컴포넌트가 rerendering 되었을때

// root 컴포넌트
function App(){
  // 값, 함수
  // 서로 다른 컴포넌트로 분리해서 관리하는 방법이 권장됨
  return <>
    <Register></Register>
  </>
}





// function App() {

// const buttonProps = {
//   text:"메일",
//   color:"red",
//   a:1,
//   b:2,
//   c:3
// }

//   return (
//     <>
//       <Button {...buttonProps}/>
//       <Button text={"카페"}/>
//       <Button text={"블로그"}><div>자식요소</div></Button>
//     </>
//   )
// }

export default App
