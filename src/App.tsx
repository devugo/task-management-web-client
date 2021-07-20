import { BrowserRouter as Router, Switch } from 'react-router-dom';

import SuccessMessages from './components/SuccessMessages';
import Auth from './interceptors/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

const App = () => {
  return (
    <Router>
      <SuccessMessages />
      <Switch>
        <Auth isAuth={false} exact path="/" component={Home} />
        <Auth isAuth exact path="/dashboard" component={Dashboard} />
        <Auth isAuth exact path="/tasks/:type?" component={Tasks} />
        <Auth isAuth={false} exact path="/login" component={Login} />
        <Auth isAuth={false} exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
