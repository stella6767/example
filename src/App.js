import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PatientList from './pages/PatientList';
import Registration from './pages/Registration';
import Test from './pages/Test';
import { Global } from './style';

function App() {
  return (
    <>
      <Global />
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
        <Route
          path="/list"
          exact={true}
          component={PatientList}
        />

        <Route
          path="/test"
          exact={true}
          component={Test}
        />
      </Switch>
    </>
  );
}

export default App;
