import React from 'react'

function ContactList(props) {
  return (
    <div className='contct__list'>

    <div className='crds'>

        <div className="card w-75">
        <div className="card-body ">
            <h5 className="card-title"> {props.name}</h5>
            <p className="card-text">+998
            {props.number} </p>
            <p>{props.category}</p>
        
        </div>
        </div>
    </div>
          
    </div>
  )
}

export default ContactList