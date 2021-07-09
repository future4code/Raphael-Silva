import { AdminHomePage } from "../pages/AdminHomePage"
import { ApplicationFormPage } from "../pages/applicationFormPage/ApplicationFormPage"
import { CreateTripPage } from "../pages/CreateTripPage"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/listTripsPage/ListTripsPage"
import { LoginPage } from "../pages/LoginPage"
import { TripDetailsPage } from "../pages/TripDetailsPage"
import { ErrorPage } from "../pages/ErrorPage"

import { BrowserRouter, Switch, Route } from "react-router-dom"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/trips/application/:id"}>
                    <ApplicationFormPage />
                </Route>    

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>

            
                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />
                </Route>
                
                <Route exact path={"/admin/trips/:id"}>
                    <TripDetailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}
