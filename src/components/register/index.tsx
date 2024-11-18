import React, { useState } from 'react';
import { FormControlLabel, Typography } from '@mui/material';
import styles from './Register.module.scss';
import Botao from '../botoes/botao';
import Input from '../input/input';
import CheckBox from '../checkbox/checkbox';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataDeNascimento, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [inputType, setInputType] = useState("text");

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

          <Input
            label="Nome"
            className={styles.inputTexto}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="CPF"
            className={styles.inputTexto}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <Input
            value={dataDeNascimento}
            label="Data de Nascimento"
            type={inputType}
            className={styles.inputTexto}
            onFocus={() => setInputType("date")}
            onBlur={() => !dataDeNascimento && setInputType("text")}
            onChange={(e) => setDob(e.target.value)}
          />
          <Input
            label="Email"
            className={styles.inputTexto}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            className={styles.inputTexto}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirme a Senha"
            type="password"
            className={styles.inputTexto}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className={styles.checkboxContainer}>
            <FormControlLabel
              control={
                <CheckBox
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
              }
              label="Aceito os termos e condições"
              className={styles.checkboxLabel}
            />
          </div>
          
          <div className={styles.divBotao}>
            <Link to="login">
              <Botao
                variant="contained"
                fullWidth
                onClick={handleRegister}
                className={styles.botaoCadastrar}
              >
                Cadastrar
              </Botao>
            </Link>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <Typography variant="h4" component="h2">
            Bem vindo!
          </Typography>
          <Typography variant="body1">Já tem um cadastro?</Typography>
          <Link to='login'>
            <Botao variant="contained" className={styles.botaoLogin}>
              Faça Login
            </Botao>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
