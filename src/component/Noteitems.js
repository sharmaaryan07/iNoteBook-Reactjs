import React from 'react'

const Noteitems = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">Title: {note.title}</h5>
           
                        <p className="card-text">Desription:  {note.desription}  </p>

                        <i className="fa-solid fa-trash mx-2"></i>
                        <i className="fa-solid fa-user-pen mx-2"></i>
                    </div>
            </div>
        </div>
    )
}

export default Noteitems
