import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = '/api/tests';
    dispatch({
      type: {
        progress: 'IN_PROGRESS_GET_USER',
        success: 'SUCCESS_GET_USER',
        failure: 'FAILURE_GET_USER',
      },
      url,
      api: (apiClient: any) => apiClient.get(url),
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
