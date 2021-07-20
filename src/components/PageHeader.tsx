import { Link } from 'react-router-dom';

import LogoWhite from './LogoWhite';

const PageHeader = () => {
  return (
    <div className="page-header">
      <Link to="/" className="task-management-text">
        <LogoWhite width={26} height={26} />
        <h1> Management</h1>
      </Link>
    </div>
  );
};

export default PageHeader;
