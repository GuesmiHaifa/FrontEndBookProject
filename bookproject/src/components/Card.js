import React from "react";
// import '../style/Card.css'


const Card =({title,  picturUrl, availability , firstname}) => {


    return (
    <>
    <div className="HomeBooks">
        
  
    <div className="card">
        <div className="card-header">
            {/* <h3 > {title} </h3> */}
            <div className="card-header-image">
          <img src={picturUrl} alt=""/>
              </div>
              
        </div>

        <div className="card-body">
            <h3 className="title"> {title}</h3>  
            <h3 className="title"> {firstname }</h3> 
            <h4 style={{color: (availability) ?  'green' : 'red' }}>  {availability} </h4>
         
          
        </div>
    </div>

      </div>
    
    </>
    
    )
}

export default Card;