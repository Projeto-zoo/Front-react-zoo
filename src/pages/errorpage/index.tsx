import React from "react";
import styles from "./errorpage.module.scss"
import { Typography } from "@mui/material";

const ErrorPage = () => {
    return(
        <div className={styles.containerError}>
            <Typography className={styles.textoError}>
                Error 404!
            </Typography>
        </div>
    );
};

export default ErrorPage;