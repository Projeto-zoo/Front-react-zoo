import React from 'react';
import RegistroInicio from '../../../components/register';
import styles from './registro.module.scss';

const Registro: React.FC = () => {
  return(
    <div className={styles.background}>
      <RegistroInicio />
    </div>
  );
};

export default Registro;