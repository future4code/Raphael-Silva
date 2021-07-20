import React from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

export const AdminHomePage = () => {

    const createTrips = () => {
        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips"
            )
            
    }

    const history = useHistory()

    const goToTripDetailsPage = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={goToTripDetailsPage}>Criar Viagem</button>
            <button onClick={goBack}>Voltar</button>
            
        </div>
    )
}