import './App.css';
import CakeContainer from "./components/CakeContainer";
import { Provider } from 'react-redux';
import store from "./redux/cakes/cakeStore"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Daily Sweets</h2>
        <CakeContainer/>     
      </div>
    </Provider>
  );
}

export default App;
