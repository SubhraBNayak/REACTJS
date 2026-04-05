import React from 'react'
import Pgtop from './components/page1/Pgtop'
import Pgnav from './components/page1/Pgnav'
import Pgcenter from './components/page1/Pgcenter'
import Pgbottom from './components/page1/Pgbottom'
import Top from './components/page2/Top'
import Center from './components/page2/Center'
import Boottom from './components/page2/Bottom'
import Page3top from './components/page3/Page3top'

const App = () => {
  return (
    <div>
      <Pgtop />
      <Pgnav />
      <Pgcenter />
      <Pgbottom />
      <Top />
      <Center />
      <Boottom />
      <Page3top />
    </div>
  )
}

export default App
