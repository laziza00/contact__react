import React from 'react'

function ContactList(props) {
  return (
    <div className='contct__list'>

    <div className='crds'>

        <div className="card w-100">
    
          {props.contactList.map((item, i)=> (
                 
          <div className="card-body " key={i}>
                <div>
                    <h5 className="card-title"> {item.name}</h5>
                    <p className="card-text">+998
                    {item.number} </p>
                    <p>{item.category}</p>
                </div>
            
                  <div>
                      <button className='remove__btn' onClick={props.removFunc}>
                      <i className='bx bx-minus'></i>
                      </button>
                  </div>
     
              </div>
          ))}

        </div>
    </div>
          
    </div>
  )
}

export default ContactList