import React from 'react'

import "./App.scss"

import Extends from './components/Extends/Extends';
import Income from './components/Income/Income';

const App: React.FC = () => {
  return (
    <div className="container">
      <Income/>
      <Extends/>
    </div>
  )
}

export default App;