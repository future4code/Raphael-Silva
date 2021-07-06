import React from "react"
import { useHistory } from "react-router-dom"

export const LoginPage = () => {
    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>LoginPage</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}