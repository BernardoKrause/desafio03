import './MovableButtons.css'

import moveIcon from '../assets/move-icon.png'

const MovableButtons = () => {
  return (
    <div className='movablebuttons'>
        <button><img src={moveIcon} />INTERAJA COMIGO</button>
        <button><img src={moveIcon} />INTERAJA COMIGO</button>
        <button><img src={moveIcon} />INTERAJA COMIGO</button>
    </div>
  )
}

export default MovableButtons