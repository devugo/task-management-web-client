import Auth from '../interceptors/Auth';
import Dashboard from '../pages/Dashboard';
import Tasks from '../pages/Tasks';

const AuthRoutes = () => {
  return (
    <>
      <Auth isAuth exact path="/dashboard" component={Dashboard} />
      <Auth isAuth exact path="/tasks/:type?" component={Tasks} />
    </>
  );
};

export default AuthRoutes;
