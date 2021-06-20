import './auth.scss';

import { Formik } from 'formik';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import RenderIcon from '../../components/icons/RenderIcon';
import Input from '../../components/input';
import { EMPTY_STRING } from '../../constants/EMPTY_STRING';

const initialFormValues: { email: string; password: string } = {
  email: EMPTY_STRING,
  password: EMPTY_STRING,
};

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Please, provide a valid email address'),
  password: Yup.string().required('Password is requried'),
});

const Login = () => {
  // const [loading, setLoading] = useState(false);
  const signInWithEmailAndPasswordHandler = (email: string, password: string) => {};
  return (
    <div className="auth">
      <div className="devugo-card">
        {/* <div className="logo"><img src={LogoText} alt="logo-text" /></div> */}
        <p className="center">
          <strong>Sign in to continue!</strong>
        </p>

        <Formik
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // setLoading({
            //     ...loading,
            //     form: true
            // })

            // processLogin(values);
            signInWithEmailAndPasswordHandler(values.email, values.password);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label>
                  <RenderIcon title="mdi mdi-email" /> Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  id="email"
                  value={values.email}
                />
                <small className="text-danger">
                  {errors.email && touched.email && errors.email}
                </small>
              </div>
              <div className="input-container">
                <label>
                  <RenderIcon title="mdi mdi-lock" /> Password
                </label>
                <Input
                  name="password"
                  onChange={handleChange}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                />
                <small className="text-danger">
                  {errors.password && touched.password && errors.password}
                </small>
              </div>
              <button type="submit">Login</button>
              {/* <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={loading.google || loading.form}
                    >
                        Sign in
                        {
                            loading.form ? <CircularProgress size={20} style={{color: 'white'}} /> : ''
                        }
                    </Button> */}

              {/* <div className="text-center mt-3">
                <p>OR</p>
              </div> */}

              <div className="text-center mt-3">
                <p>
                  Dont have an account? <Link to="/register">Sign up here</Link>
                </p>
                <p>
                  <Link to="/password-reset">Forgot password?</Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
