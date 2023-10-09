import logo from './logo.svg';
import './App.css';
import { useReducer} from 'react'

function App(state,action) {
  if(action.type==='incremented age'){
  return {
    age:state.age + 1
  };
}
throw Error("unknown action");
}

export default function Counter(){
  const [state,dispatch]=useReducer(App,{age:42});
  return(
    <>
    <button onClick={()=>{dispatch({type:'incremented age'})}}>incremented age</button>
    <p>hello! yor age {state.age}</p>
    </>
  )
}

// export default App;
