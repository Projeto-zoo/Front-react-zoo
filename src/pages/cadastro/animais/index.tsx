import { Typography } from "@mui/material"
import React, { useState } from 'react';
import http from "../../../http";

const [animais, setAnimais] = useState<Animais>({
    nome: "",
    idade: "",
    altura: "",
    peso: "",
    raca: ""
});

const aoSubmeterFormulario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    http.post("animal", animais).then(() => {
        alert("Animal cadastrado com sucesso!")
    })
}

const CadastroAnimais = () => {
    return(
        <>
            <Typography>
                Cadastro de Animais

                <form onSubmit={aoSubmeterFormulario}>

                </form>
            </Typography>
        </>
    )
}

export default CadastroAnimais;