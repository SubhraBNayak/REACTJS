import React from 'react'
import Pgtop from './components/Pgtop'
import Pgnav from './components/Pgnav'
import Pgcenter from './components/Pgcenter';
import Pgbottom from './components/Pgbottom';

const App = () => {
  return (
    <div>
      <Pgtop />
      <Pgnav />
      <Pgcenter />
      <Pgbottom />
    </div>
  )
}

export default App
