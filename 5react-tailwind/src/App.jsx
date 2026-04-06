import React from 'react'
import Pgtop from './components/page1/Pgtop'
import Pgnav from './components/page1/Pgnav'
import Pgcenter from './components/page1/Pgcenter'
import Pgbottom from './components/page1/Pgbottom'
import Top from './components/page2/Top'
import Center from './components/page2/center'
import Boottom from './components/page2/Bottom'
import Page3top from './components/page3/Page3top'
import Page3center from './components/page3/Page3center'
import Page3bottom from './components/page3/Page3bottom'

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
      <Page3center />
      <Page3bottom />
    </div>
  )
}

export default App
