import React, {useState} from 'react'

import "./App.scss"

import Extends from './components/Extends/Extends';
import Income from './components/Income/Income';

const App: React.FC = () => {
  const [incomeDif, setIncomeDif] = useState<number>(0)
  const [extendDif, setExtendDif] = useState<number>(0)

  const AddDifferent = (income: number) => {
    setIncomeDif(income)
  }

  const DecDifferent = (extend: number) => {
    setExtendDif(extend)
  }

  const Total = (): number => {
    return incomeDif - extendDif
  }
  
  return (
    <div className="container">
      <div className="Total">
        Balance:
        {Total()}
      </div>
      <Income AddIncome={AddDifferent}/>
      <Extends AddExtend={DecDifferent}/>
    </div>
  )
}

export default App;