import React from "react"
import { useHistory } from "react-router-dom"

export const TripDetailsPage = () => {
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