import React from "react"
import { useHistory } from "react-router-dom"

export const CreateTripPage = () => {
    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>CreateTripPage</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}