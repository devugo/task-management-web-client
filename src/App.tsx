import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import SuccessMessages from './components/SuccessMessages';
import Auth from './interceptors/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import { getLabels } from './store/actions/label';
import { getPriorities } from './store/actions/priority';
import { getProjects } from './store/actions/project';
import { RootStateType } from './types.d';

const App = () => {
  const dispatch = useDispatch();
  const {
    auth,
    tasks: { summary },
  } = useSelector((state: RootStateType) => state);

  const loadResources = () => {
    if (auth.loggedIn && summary) {
      dispatch(getPriorities());
      dispatch(getProjects());
      dispatch(getLabels());
    }
  };

  useEffect(() => {
    loadResources();
  }, [auth, summary]);

  return (
    <Router>
      <SuccessMessages />
      <Switch>
        <Auth isAuth exact path="/dashboard" component={Dashboard} />
        <Auth isAuth exact path="/tasks/:type?" component={Tasks} />
        <Auth isAuth={false} exact path="/" component={Home} />
        <Auth isAuth={false} exact path="/login" component={Login} />
        <Auth isAuth={false} exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
