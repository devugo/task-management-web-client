import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageHeader from './components/page-header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
