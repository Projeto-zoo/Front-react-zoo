import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataDeNascimento, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = () => {
    // Lógica de registro aqui
    console.log({ name, cpf, dataDeNascimento, email, password, confirmPassword, agreeTerms });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftPanel}>
          <Typography variant="h5" component="h2" className={styles.title}>
            CRIE SUA CONTA
          </Typography>

          <TextField // Campo de nome
            label="Nome"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField // Campo de CPF
            label="CPF"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <TextField // Campo de data de nascimento
            label="Data de Nascimento"
            type="date"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={dataDeNascimento}
            onChange={(e) => setDob(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField // Campo de email
            label="Email"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField // Campo de senha
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField // Campo de confirmação de senha
            label="Confirme a Senha"
            type="password"
            variant="outlined"
            fullWidth
            className={styles.inputField}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className={styles.checkboxContainer}>
            <FormControlLabel // Checkbox para aceitar termos
              control={
                <Checkbox
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  style={{ color: '#424242' }} // Cor do checkbox
                />
              }
              label="Aceito os termos e condições"
              className={styles.checkboxLabel}
              style={{ marginRight: '8px' }} // Espaçamento entre checkbox e label
            />
          </div>
          <Button variant="contained" fullWidth onClick={handleRegister} className={styles.signupButton}>
            Cadastrar
          </Button>
        </div>
        <div className={styles.rightPanel}>
          <Typography variant="h4" component="h2">
            Bem vindo!
          </Typography>
          <Typography variant="body1">Já tem um cadastro?</Typography>
          <Button variant="contained" className={styles.signupButton}>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Faça Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
