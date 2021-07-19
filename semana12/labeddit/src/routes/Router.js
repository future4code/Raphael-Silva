import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FeedListPage from '../pages/FeedListPage/FeedListPage'
import LoginPage from '../pages/FeedListPage/FeedListPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>
                <Route exact path='/cadastro'>
                    <SignUpPage/>
                </Route>
                <Route exact path='/'>
                    <FeedListPage/>
                </Route>
                <Route exact path='/pagina-do-post'>
                    <PostPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router