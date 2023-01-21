import { useCallback, useState } from 'react'

import DefaultButtons from './components/DefaultButtons'
import HoverButtons from './components/HoverButtons'
import FocusButtons from './components/FocusButtons'
import DisabledButtons from './components/DisabledButtons'
import LoadingButtons from './components/LoadingButtons'

import defaultCursor from './assets/default-cursor.png'
import disabledCursor from './assets/disabled-cursor.png'
import loadingCursor from './assets/loading-cursor.png'
import moveCursor from './assets/move-cursor.png'
import moveIcon from './assets/move-icon.png'

import './App.css'
import MovableButtons from './components/MovableButtons'



const types = [
  {id: 1, name: "default"},
  {id: 2, name: "hover"},
  {id: 3, name: "focus"},
  {id: 4, name: "disabled"},
  {id: 5, name: "loading"},
  {id: 6, name: "movable"},
];

function App() {
  const [type, setType] = useState(types[0].name);

  // setting types

  const defaultType = (() => {
    setType(types[0].name);
  })

  const hoverType = (() => {
    setType(types[1].name);
  })

  const focusType = (() => {
    setType(types[2].name);
  })

  const disabledType = (() => {
    setType(types[3].name);
  })

  const loadingType = (() => {
    setType(types[4].name);
  })

  const movableType = (() => {
    setType(types[5].name);
  })

  return (
    <div className="App">
      <div className="tipos">
        <header>
            <h3>Tipos de botão</h3>
            <p>Dentro de um layout, botões servem para destacar ações importantes a serem tomadas.<br />Acompanhe abaixo um exemplo de tipos e propriedades.</p>
        </header>
        <main>
            <table>
                <tr class="difcolor">
                    <td></td>
                    <td>BOTÃO PRIMÁRIO</td>
                    <td>BOTÃO SECUNDÁRIO</td>
                    <td>BOTÃO TERCIÁRIO</td>
                    <td>CURSOR</td>
                </tr>
                <tr className='linehover' onClick={defaultType}>
                    <td class="difcolor">DEFAULT</td>
                    <td><button>DEFAULT PRIMARY</button></td>
                    <td><button className='secondary'>DEFAULT SECONDARY</button></td>
                    <td><button className='tertiary'>DEFAULT TERTIARY</button></td>
                    <td><img src={defaultCursor} /></td>
                </tr>
                <tr className='linehover' onClick={hoverType}>
                    <td class="difcolor">HOVER</td>
                    <td><button className='hover'>HOVER PRIMARY</button></td>
                    <td><button className='secondary hoverSec'>HOVER SECONDARY</button></td>
                    <td><button className='tertiary'>HOVER TERTIARY</button></td>
                    <td><img src={defaultCursor} /></td>
                </tr>
                <tr className='linehover' onClick={focusType} >
                    <td class="difcolor">FOCUS</td>
                    <td><button className='focus'>FOCUS PRIMARY</button></td>
                    <td><button className='secondary focus'>FOCUS SECONDARY</button></td>
                    <td><button className='tertiary focus'>FOCUS TERTIARY</button></td>
                    <td><img src={defaultCursor} /></td>
                </tr>
                <tr className='linehover' onClick={disabledType}>
                    <td class="difcolor">DISABLED</td>
                    <td><button className='disabled' disabled>DISABLED PRIMARY</button></td>
                    <td><button className='secondary disabled' disabled>DISABLED SECONDARY</button></td>
                    <td><button className='tertiary disabled' disabled>DISABLED TERTIARY</button></td>
                    <td><img src={disabledCursor} /></td>
                </tr>
                <tr className='linehover' onClick={loadingType}>
                    <td class="difcolor">LOADING</td>
                    <td><button><div className='loader'></div>LOADING PRIMARY</button></td>
                    <td><button className='secondary'><div className='loader'></div>LOADING SECONDARY</button></td>
                    <td><button className='tertiary'><div className='loader'></div>LOADING TERTIARY</button></td>
                    <td><img src={loadingCursor} /></td>
                </tr>
                <tr className='linehover' onClick={movableType}>
                    <td class="difcolor">MOVABLE</td>
                    <td><button><img src={moveIcon} className='move' />MOVABLE PRIMARY</button></td>
                    <td><button className='secondary'><img src={moveIcon} className='move' />MOVABLE SECONDARY</button></td>
                    <td><button className='tertiary'><img src={moveIcon} className='move' />MOVABLE TERTIARY</button></td>
                    <td><img src={moveCursor} /></td>
                </tr>
            </table>
        </main>
      </div>
      <div className="teste">
        <header>
            <h3>Teste os botões</h3>
            <p>Interaja com os botões e observe a mudança de aparência e de cursores</p>
        </header>
        <main>
            {type === "default" && <DefaultButtons />}
            {type === "hover" && <HoverButtons />}
            {type === "focus" && <FocusButtons />}
            {type === "disabled" && <DisabledButtons />}
            {type === "loading" && <LoadingButtons />}
            {type === "movable" && <MovableButtons />}
        </main>
      </div>
    </div>
  )
}

export default App
