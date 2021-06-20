import './auth.scss';

import { Alert } from 'antd';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../components/button';
import RenderIcon from '../../components/icons/RenderIcon';
import Input from '../../components/input';
import { EMPTY_STRING } from '../../constants/EMPTY_STRING';
import { signup } from '../../store/actions/auth';
import { SignupType } from '../../types.d';

const initialFormValues: SignupType = {
  email: EMPTY_STRING,
  username: EMPTY_STRING,
  password: EMPTY_STRING,
  confirmPassword: EMPTY_STRING,
};

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Please, provide a valid email address'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .required('Please confirm password')
    .oneOf([Yup.ref('password')], 'Confirm password must match password'),
});

const Register = () => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  const signUpWithEmailAndPasswordHandler = (values: SignupType) => {
    const { email, password, username } = values;
    dispatch(signup({ email, password, username }));
  };
  return (
    <div className="auth">
      <div className="devugo-card">
        {/* <div className="logo"><img src={LogoText} alt="logo-text" /></div> */}
        <p className="center">
          <strong>Sign up to continue!</strong>
        </p>

        <Formik
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // setLoading({
            //     ...loading,
            //     form: true
            // })

            // processLogin(values);
            signUpWithEmailAndPasswordHandler(values);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="server-message mb-2 mt-2">
                <Alert
                  message="Error"
                  description="This is an error message about copywriting."
                  type="error"
                  showIcon
                />
              </div>
              <div className="input-container">
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
                <small className="danger">{errors.email && touched.email && errors.email}</small>
              </div>
              <div className="input-container">
                <label>
                  <RenderIcon title="mdi mdi-user" /> Username
                </label>
                <Input
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleChange}
                  id="username"
                  value={values.username}
                />
                <small className="danger">
                  {errors.username && touched.username && errors.username}
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
                <small className="danger">
                  {errors.password && touched.password && errors.password}
                </small>
              </div>
              <div className="input-container">
                <label>
                  <RenderIcon title="mdi mdi-lock" /> Confirm Password
                </label>
                <Input
                  name="confirmPassword"
                  onChange={handleChange}
                  id="confirmPassword"
                  type="password"
                  placeholder="Enter your password again"
                  value={values.confirmPassword}
                />
                <small className="danger">
                  {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                </small>
              </div>
              <Button type="submit">Register</Button>

              <div className="center mt-2">
                <p>
                  Already have an account? <Link to="/login">Sign in here</Link>
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

export default Register;
