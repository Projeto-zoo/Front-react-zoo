import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    //toda a logica do login aqui dentro
    console.log({ email, password, rememberMe });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftPanel}>
          <Typography variant="h4" component="h2">
            Bem vindo!
          </Typography>
          <Typography variant="body1">Não tem cadastro?</Typography>
          <Button variant="contained" className={styles.signupButton}>
            <Link to="/Register" style={{ color: '#fff', textDecoration: 'none' }}>Cadastre-se</Link>
          </Button>
        </div>
        <div className={styles.rightPanel}>
          <Typography variant="h5" component="h2" className={styles.title}>
            FAÇA LOGIN
          </Typography>

          <TextField    //text field de email
            label="Email"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField    //text field de senha
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.checkboxContainer}> 
            <FormControlLabel   //mark para lembrar senha
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ color: '#424242' }} // Cor do checkbox
                />
              }
              label="Lembrar"
              className={styles.checkboxLabel}
              style={{ marginRight: '8px' }} // Espaçamento entre checkbox e label
            />
            <Typography variant="body2" className={styles.link} onClick={() => alert('Redirecionar para recuperação de senha')}>
              Esqueci a senha
            </Typography>
          </div>
          <Button variant="contained" fullWidth onClick={handleLogin} className={styles.signupButton}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
