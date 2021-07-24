import AuthRoutes from './auth';
import PublicRoutes from './public';

const Routes = () => {
  return (
    <>
      <PublicRoutes />
      <AuthRoutes />
    </>
  );
};

export default Routes;
