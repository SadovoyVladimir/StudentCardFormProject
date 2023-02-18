import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CardCreate from './layouts/cardCreate'
import CardEdit from './layouts/cardEdit'
import Main from './layouts/main'

function App() {
  return (
    <Switch>
      <Route path='/editCard' component={CardEdit} />
      <Route path='/createCard' component={CardCreate} />
      <Route path='/' exact component={Main} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
