import React, { useState } from 'react';
import { FormControlLabel, Typography } from '@mui/material';
import styles from './Login.module.scss';
import Botao from '../botoes/botao';
import Input from '../input/input';
import CheckBox from '../checkbox/checkbox';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
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
          <Link to='registro'>
            <Botao variant="contained" className={styles.botaoLogin}>
              Cadastre-se
            </Botao>
          </Link>
        </div>
        <div className={styles.rightPanel}>
          <Typography variant="h5" component="h2" className={styles.title}>
            FAÇA LOGIN
          </Typography>

          <Input
            value={email}
            label="Email"
            className={styles.inputTexto}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            className={styles.inputTexto}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <div className={styles.checkboxContainer}> 
            <FormControlLabel
              control={
                <CheckBox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
              }
              label="Lembrar"
              className={styles.checkboxLabel}
              style={{ marginRight: '8px' }}
            />
            <Typography variant="body2" className={styles.link} onClick={() => alert('Redirecionar para recuperação de senha')}>
              Esqueci a senha
            </Typography>
          </div>
          <div className={styles.divBotao}>
            <Link to='/' >
              <Botao
                variant="contained"
                fullWidth
                onClick={handleLogin}
                className={styles.botaoLogin}
              >
                Logar
              </Botao>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
