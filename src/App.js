import React from 'react'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './containers/Home'
import New from './containers/New'
import Edit from './containers/Edit'
import Remove from './containers/Delete'
import Fetching from './containers/Fetching'
import Alert from './containers/Alert'
import Layout from './components/Layout'

import {Provider} from 'react-redux'
import configureStore from './configureStore'
const store = configureStore()

const App = ()=><BrowserRouter>
    <Provider store={store}>
        <Layout>
            <Fetching/>
            <Alert/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/new" component={New}/>
                <Route path="/edit/:id" component={Edit}/>
                <Route path="/remove/:id" component={Remove}/>
            </Switch>
        </Layout>
    </Provider>
</BrowserRouter>
export default App