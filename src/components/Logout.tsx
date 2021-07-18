import { useDispatch } from 'react-redux';

import { signOut } from '../store/actions/auth';

const Logout = () => {
  const dispatch = useDispatch();

  const logUserOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="logout" onClick={logUserOut}>
      <span>LOGOUT</span>
    </div>
  );
};

export default Logout;
