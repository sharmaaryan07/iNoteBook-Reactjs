import React from 'react'

const Noteitems = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">Title: {note.title}</h5>
           
                        <p className="card-text">Desription:  {note.desription}  </p>

                        <button type="button" class="btn btn-outline-info btn-sm ">Delete</button>
                        <button type="button" class="btn btn-outline-info btn-sm mx-2">Edit</button>
                    </div>
            </div>
        </div>
    )
}

export default Noteitems
