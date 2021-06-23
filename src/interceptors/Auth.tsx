import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import PageLoader from '../components/page-loader';
import { keepUserLoggedIn } from '../store/actions/auth';
import { KEEP_AUTH_USER } from '../store/actions/types';
import { LoaderType, RootStateType } from '../types.d';

function Auth({ component: Component, isAuth, ...rest }: any) {
  console.log(isAuth);
  const [mount, setMount] = useState(false);
  const dispatch = useDispatch();
  const { auth, loader } = useSelector((state: RootStateType) => state);

  const successData = loader.find((x) => x.type === KEEP_AUTH_USER.SUCCESS) as LoaderType;
  const errorData = loader.find((x) => x.type === KEEP_AUTH_USER.FAILURE) as LoaderType;

  useEffect(() => {
    if (!auth.loggedIn) {
      dispatch(keepUserLoggedIn());
    } else {
      setMount(true);
    }
  }, []);

  useEffect(() => {
    if (successData?.response?.status == 200) {
      setMount(true);
    }
    if (errorData?.response?.status == 401) {
      setMount(true);
    }
  }, [successData, errorData]);

  if (isAuth) {
    return (
      <Route
        {...rest}
        render={(props) =>
          mount ? (
            auth.loggedIn ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            <PageLoader />
          )
        }
      />
    );
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        mount ? (
          auth.loggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        ) : (
          <PageLoader />
        )
      }
    />
  );
}

export default Auth;
