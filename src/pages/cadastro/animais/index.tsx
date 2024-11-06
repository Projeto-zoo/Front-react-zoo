import React, { useState } from 'react';
import http from "../../../http";
import { Animal } from "../../../interface/animais";
import { Typography } from "@mui/material";
import Header from '../../../components/header/header';
import Input from '../../../components/input/input';
import Botao from '../../../components/botoes/botao';
import styles from './cadastroanimais.module.scss';
import { Link } from 'react-router-dom';

const CadastroAnimais = () => {
    const [animais, setAnimais] = useState<Animal>({
        nome: "",
        data: "",
        altura: "",
        peso: "",
        especie: "",
        habitat: "",
    });
    const [inputType, setInputType] = useState("text");

    const aoSubmeterFormulario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        http.post("animal", animais).then(() => {
            alert("Animal cadastrado com sucesso!");
        });
    };

    return (
        <>
            <Header />
            <Typography variant="h4" component="h1"
                sx={{
                    textAlign: 'center',
                    padding: '20px'
                }}>
                Cadastro de Animais
            </Typography>

            <div>
                <form onSubmit={aoSubmeterFormulario} className={styles.formCadastro}>
                    <Input
                        value={animais.nome}
                        label="Nome do Animal"
                        onChange={(e) => setAnimais({ ...animais, nome: e.target.value })}
                    />
                    <Input
                        value={animais.data}
                        label="Data de Nascimento"
                        type={inputType}
                        onFocus={() => setInputType("date")}
                        onBlur={() => !animais.data && setInputType("text")}
                        onChange={(e) => setAnimais({ ...animais, data: e.target.value })}
                    />
                    <Input 
                        value={animais.altura}
                        label="Altura do animal"
                        onChange={(e) => setAnimais({ ...animais, altura: e.target.value })}
                    />
                    <Input 
                        value={animais.peso}
                        label="Peso do animal"
                        onChange={(e) => setAnimais({ ...animais, peso: e.target.value })}
                    />
                    <Input 
                        value={animais.especie}
                        label="Especie do animal"
                        onChange={(e) => setAnimais({ ...animais, especie: e.target.value })}
                    />
                    <Input 
                        value={animais.habitat}
                        label="Especie do animal"
                        onChange={(e) => setAnimais({ ...animais, habitat: e.target.value })}
                    />
                    <Link to="/">
                        <Botao type='submit'>Cadastrar</Botao>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default CadastroAnimais;
