import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store"
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from './components/HookCakeContainer';
import CreamContainer from './components/CreamContainer';
import InputCakeContainer from './components/InputCakeContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Daily Sweets</h2>
        {/* <CakeContainer/>      */}
        {/* <HookCakeContainer/> */}
        <CreamContainer/>
        <InputCakeContainer/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
