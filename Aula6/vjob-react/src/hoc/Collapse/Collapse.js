import React from 'react';


const collapse = (props) => (

    <div>
        <div className="container">
            <button type="button" className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">{props.innerText}</button>
        </div>
        <div className="collapse pt-3" id="collapseExample">
            <div className="card card-body">
                {props.children}
            </div>
        </div>
    </div>

)

export default collapse;