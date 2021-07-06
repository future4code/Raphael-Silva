import React from "react"
import { useHistory } from "react-router-dom"

export const ListTripsPage = () => {
    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }
    
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>ListTripsPage</p>
            <button onClick={goToApplicationFormPage}>Formulário</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}