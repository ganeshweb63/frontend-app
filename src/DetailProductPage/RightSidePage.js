import React from "react";

const RightSidePage=({product})=>{

    return(
        <div className='right-box'>
           <h2 className="brand">{product.brand}</h2>

           <ul className="highlights">
            <li>{product.highlights[0].display}</li><br/>
            <li>{product.highlights[1].camera}</li><br/>
            <li>{product.highlights[2].battery}</li><br/>
            <li>{product.highlights[3].processor}</li><br/>
            <li>{product.highlights[4].memory}</li><br/>
           </ul>

           <p className="description-list"> <b>description : </b> {product.description['about']}</p>

           
        </div>
    )
}

export default RightSidePage;