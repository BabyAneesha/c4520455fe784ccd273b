import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Info from './Components/Info';

function App() {
  return (
    <div >
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/info" exact component={Info}/>
      </Switch>
    </div>
  );
}

export default App;
