import React from "react"
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

export const TripDetailsPage = () => {
    useProtectedPage();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/raphael-nicolini-molina/trips",
                {
                    headers: {
                        auth: token
                    }
                }
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            });
    }, []);

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>TripDetailsPage</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}