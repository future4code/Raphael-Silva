import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Card, ListContainer } from "./styled"


export const ListTripsPage = () => {

    const [trips, setTrips] = useState ([])  

    const history = useHistory()

    const goToApplicationFormPage = (id) => {
        history.push(`/trips/application/${id}`)
    }
    
    const goBack = () => {
        history.goBack()
    }
    const getTrips = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/raphael-nicolini-molina/trips",
            
            )
            .then((response) => {
               setTrips(response.data.trips);
               console.log(trips)
            }) 
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            });
    }
    useEffect(() => {
        getTrips()
    }, []);

    const recebeTrips = trips && trips.map((trip) => {
        return (
            <Card>
                <h2>{trip.name}</h2>
                <p><b>Descrição</b>: {trip.description}</p>
                <p><b>Planeta</b>: {trip.planet}</p>
                <p><b>Duração</b>: {trip.durationInDays}</p>
                <p><b>Data</b>: {trip.date}</p>
                <button onClick={() => goToApplicationFormPage(trip.id)}>Formulário</button>

            </Card>
        )
    })


    return (
        <div>
            <p>ListTripsPage</p>
            <button onClick={goToApplicationFormPage}>Formulário</button>
            <button onClick={goBack}>Voltar</button>
        <ListContainer>
            {recebeTrips}
        </ListContainer>
        </div>
    )
}