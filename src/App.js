import './App.css';
import Bat from './Component/Bat';
import {Provider} from 'react-redux';
import store from './redux/store';
import Ball from './Component/Ball';
import User from './Component/User';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Bat/>
        <Ball/>
        <User/>
      </Provider>
    </div>
  );
}

export default App;
