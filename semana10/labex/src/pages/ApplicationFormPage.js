import React from "react"
import { useHistory } from "react-router-dom"

export const ApplicationFormPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>ApplicationFormPage</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}