import { Typography } from "@mui/material";
import React, { useState } from 'react';
import http from "../../../http";
import { Animal } from "../../../interface/animais";

const CadastroAnimais = () => {
    const [animais, setAnimais] = useState<Animal>({
        nome: "",
        idade: "",
        altura: "",
        peso: "",
        especie: "",
    });

    const aoSubmeterFormulario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        http.post("animal", animais).then(() => {
            alert("Animal cadastrado com sucesso!");
        });
    };

    return (
        <>
            <Typography>
                Cadastro de Animais
                <form onSubmit={aoSubmeterFormulario}>
                    {/* Aqui você pode adicionar campos de input para capturar os dados dos animais */}
                </form>
            </Typography>
        </>
    );
};

export default CadastroAnimais;