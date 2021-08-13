import logo from './logo.svg';
import './App.css';
import PizzaContainer from './components/PizzaContainer';
import { Provider} from 'react-redux'
import { store } from './redux/store'
import IcecreamContainer from './components/IcecreamContainer';
function App() {
  return (
    <div className="container mt-3">
      <Provider store={store}>
      <PizzaContainer/>
      <hr/>
      <IcecreamContainer/>
     </Provider>
    </div>
  );
}

export default App;
