import React from 'react'

function SortElement(props) {
  return (
    <div>
     <div className='list__btns' >
        <button className='list__btn' id="Allbtn" onClick={props.sortBtn}>All btn</button>
        <button className='list__btn' id="Family" onClick={props.sortBtn} >Family</button>
        <button className='list__btn' id="Collegue" onClick={props.sortBtn}>Collegue</button>
        <button className='list__btn' id="Friend" onClick={props.sortBtn}>Friend</button>
     
      </div>
    </div>
  )
}

export default SortElement