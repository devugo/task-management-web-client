import Auth from '../interceptors/Auth';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/Home';

const PublicRoutes = () => {
  return (
    <>
      <Auth isAuth={false} exact path="/" component={Home} />
      <Auth isAuth={false} exact path="/login" component={Login} />
      <Auth isAuth={false} exact path="/register" component={Register} />
    </>
  );
};

export default PublicRoutes;
