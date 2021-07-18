import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import SuccessMessages from './components/SuccessMessages';
import Auth from './interceptors/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';

const App = () => {
  return (
    <Router>
      <SuccessMessages />
      <PageHeader />
      <Switch>
        <Auth isAuth exact path="/" component={Dashboard} />
        <Auth isAuth exact path="/tasks/:type?" component={Tasks} />
        <Auth isAuth={false} exact path="/login" component={Login} />
        <Auth isAuth={false} exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
