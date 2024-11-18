import React from 'react';
import LoginInicio from '../../../components/login';
import styles from './login.module.scss';

const Login: React.FC = () => {
  return(
    <div className={styles.background}>
      <LoginInicio />
    </div>
  );
};

export default Login;