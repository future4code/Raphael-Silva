import React from "react"
import { useHistory } from "react-router-dom"

export const AdminHomePage = () => {
    const history = useHistory()

    const goToTripDetailsPage = () => {
        history.push("/admin/trips/list")
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={goToTripDetailsPage}></button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}