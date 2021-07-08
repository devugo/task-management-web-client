import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PageHeader from './components/page-header';
import Auth from './interceptors/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard';
import Tasks from './pages/tasks';

const App = () => {
  return (
    <Router>
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
