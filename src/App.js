import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Registration from './pages/Registration';

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact={true}
          component={Home}
        />
        <Route
          path="/register"
          exact={true}
          component={Registration}
        />
      </Switch>
    </>
  );
}

export default App;
