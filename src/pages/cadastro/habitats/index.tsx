import { Typography } from "@mui/material";
import React, { useState } from 'react';
import http from "../../../http";
import { Habitat } from "../../../interface/habitats";

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

    return (
        <>
            <Typography>Cadastro de Habitats</Typography>
            <form onSubmit={aoSubmeterFormulario}>
                {/* Aqui você pode adicionar campos de input para capturar os dados do habitat */}
            </form>
        </>
    );
}

export default CadastroHabitats;