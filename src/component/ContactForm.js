import React from 'react'

function ContactForm(props) {
  return (
    <div>
        <form onSubmit={props.addContactList}
        className="contact__form">
            <div className="mb-3">
                <label htmlFor="exampleInputText1" className="form-label"> UserName</label>
                <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" onChange={props.typeHandler}/>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputNum1" className="form-label">Number</label>
                <input type="number" className="form-control" id="exampleInputNum1" onChange={props.typeHandler}/>
            </div>
            <div className="mb-3">
                <select className='select' type="select" 
                            onChange={props.selectOption}>
                    <option value="Family">Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Collegue">Collegue</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm