import React from 'react'
import {Route, Switch, Redirect} from "react-router-dom"

import Nav from "./components/Nav";
import { LoginPage } from "./pages/LoginPage"
import { ConfigPage } from "./pages/ConfigPage"
import { CreatePlayListPage } from "./pages/CreatePlayListPage"
import { Schedules } from './pages/SchedulesPage';
import { Register } from './pages/Register';
import { ClientPage } from './pages/ClientPage';
import { DownloadPlaylistPage } from './pages/DownloadPlaylistPage';

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    
    let routes

    if(isLoggedIn) {
        routes = (
            <>
                <Nav setIsLoggedIn={setIsLoggedIn} />
                <Switch>
                    <Route path="/home" render={() => <ClientPage />}/>
                    <Route path="/gerenciar" component={ConfigPage}/>
                    <Route path="/createPlayList" component={CreatePlayListPage}/>
                    <Route path="/agendamentos" component={Schedules}/>   
                    <Route path="/cadastro" component={Register}/>
                    {/* <Route path="/cliente" component={ClientPage}/> */}
                    <Route path="/download" component={DownloadPlaylistPage}/>
                                        
                    <Redirect to="/" />
                </Switch>
            </>
        )
    } else {
        routes = <Route exact path="/" render={() => <LoginPage setIsLoggedIn={setIsLoggedIn} />}/>
    }

    return routes
}
