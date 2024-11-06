import React, { useState } from 'react';
import http from "../../../http";
import { Habitat } from "../../../interface/habitats";
import { Typography } from "@mui/material";
import Header from '../../../components/header/header';
import Input from '../../../components/input/input';
import Botao from '../../../components/botoes/botao';
import CheckBox from '../../../components/checkbox/checkbox';
import styles from './cadastrohabitats.module.scss';
import { Link } from 'react-router-dom';

const CadastroHabitats = () => {
    const [habitats, setHabitat] = useState<Habitat>({
        nome: "",
        temperatura: 0,
        temp_min: 0,
        temp_max: 0,
        qnt_animais: 0,
        sensor: false,
    });

    const aoSubmeterFormulario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        http.post("habitat", habitats).then(() => {
            alert("Habitat cadastrado com sucesso!");
        });
    };

    const handleNumberChange = (field: keyof Habitat) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (value >= 0 || e.target.value === "") {
            setHabitat({ ...habitats, [field]: value || 0 });
        }
    };

    return (
        <>
            <Header />
            <Typography variant="h4" component="h1"
                sx={{
                    textAlign: 'center',
                    padding: '20px'
                }}>
                Cadastro de Habitats
            </Typography>

            <div>
                <form onSubmit={aoSubmeterFormulario} className={styles.formCadastro}>
                    <Input
                        value={habitats.nome}
                        label="Nome do Habitat"
                        onChange={(e) => setHabitat({ ...habitats, nome: e.target.value })}
                    />
                    <Input
                        value={habitats.temperatura}
                        label="Temperatura"
                        type="number"
                        onChange={handleNumberChange("temperatura")}
                    />
                    <Input
                        value={habitats.temp_min}
                        label="Temperatura Mínima"
                        type="number"
                        onChange={handleNumberChange("temp_min")}
                    />
                    <Input
                        value={habitats.temp_max}
                        label="Temperatura Máxima"
                        type="number"
                        onChange={handleNumberChange("temp_max")}
                    />
                    <Input
                        value={habitats.qnt_animais}
                        label="Quantidade de Animais"
                        type="number"
                        onChange={handleNumberChange("qnt_animais")}
                    />
                    <div className={styles.containerCheckbox}>
                        <label className={styles.textoSensor}>Sensor</label>
                        <CheckBox
                            checked={habitats.sensor}
                            onChange={(e) => setHabitat({ ...habitats, sensor: e.target.checked })}
                        />
                    </div>
                    <Link to="/">
                        <Botao type='submit'>Cadastrar</Botao>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default CadastroHabitats;
