import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DynamicImport from './DynamicImport';
import Loading from './Loading';
// import Home from './Home'
// import Roster from './Roster'
// import Schedule from './Schedule'

const createDynamicImport = (load) => (props) => (
  <DynamicImport load={load}>
    {(Component) => Component === null ?
      <Loading /> :
      <Component {...props} />}
  </DynamicImport>
);

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = ({ className }) => (
  <main className={className}>
    <Switch>
      <Route exact path='/' component={createDynamicImport(() => import('./Home'))}/>
      <Route path='/roster' component={createDynamicImport(() => import('./Roster'))}/>
      <Route path='/schedule' component={createDynamicImport(() => import('./Schedule'))}/>
    </Switch>
  </main>
)

export default Main
