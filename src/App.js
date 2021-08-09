import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact={true}
          component={Home}
        />
      </Switch>
    </>
  );
}

export default App;
