import React from "react"
import { useHistory } from "react-router-dom"

export const HomePage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }


    return (
        <div>
            <p>HomePage</p>
            <button onClick={goToLoginPage}>Login</button>
            <button onClick={goToListTripsPage}>ListTrips</button>
        </div>
    )
}