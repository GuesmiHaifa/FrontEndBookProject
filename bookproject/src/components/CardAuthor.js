import React from "react";
import '../style/Card.css'


const CardAuthor =({firstname,  lastname }) => {


    return (
    <>
    <div className="HomeBooks">
        
  
    <div className="card">
        <div className="card-header">
            <h3> {firstname} </h3>
           
        </div>

        <div className="card-body">
            {/* <h3 className="title"> {title}</h3>   */}
            {/* <h4 style={{color:   'green' }}>  {authors.map(a => <h3> {a.firstname}</h3>)} </h4> */}
            <h4 style={{color: (lastname) ?  'green' : 'red' }}>  {lastname} </h4>
            {/* <h6>  {authors} </h6> */}
          
        </div>
    </div>

      </div>
    
    </>
    
    )
}

export default CardAuthor;