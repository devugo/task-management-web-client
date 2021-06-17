import './style.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const SingleTaskMainGroup = (props: { title: string; icon: string }) => {
  const { title, icon } = props;
  return (
    <div className={`single-task-main-group${title === 'Home' ? ' active' : ''}`}>
      <Link to="/">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SingleTaskMainGroup;
