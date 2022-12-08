import React, { useEffect, useState } from 'react'
import { getAllAdminCarosel } from '../../admin_axios/axios'
import { imageFolder } from '../../BaseUrl'

function Carosel() {
  const [carosel,setCarosel] = useState([])
  useEffect(()=>{
        

    getAllAdminCarosel().then((carosel)=>{
        setCarosel(carosel)
        
    })
    

},[])

  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  {carosel.map((carosel,index)=>{
                                        return(
    <div className="carousel-item active">
      <img style={{maxHeight:'600px',objectFit:'cover'}} src={imageFolder+carosel.image} className="d-block w-100" alt="..."/>
      
    </div>
    )
                                            
                                        
  })}
    
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Carosel