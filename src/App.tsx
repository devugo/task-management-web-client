import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import SuccessMessages from './components/SuccessMessages';
import Routes from './routes';
import { getLabels } from './store/actions/label';
import { getProjects } from './store/actions/project';

const App = () => {
  const dispatch = useDispatch();

  const loadResources = () => {
    dispatch(getProjects());
    dispatch(getLabels());
  };

  useEffect(() => {
    loadResources();
  }, []);

  return (
    <Router>
      <SuccessMessages />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
};

export default App;
