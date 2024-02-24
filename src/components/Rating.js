import React from 'react'
import './All.css'
import img1 from '../img/avtar.jpg'




export default function Rating() {
  return (
    <div id='rating'>

           
    <section className="service my-5 bg-light py-5" >
        <div className="container">

            <h1 className="text-center my-3 mb-5">customer <span className="text-success">Ratings</span></h1>

            


            <div className="row text-center">
                <div className="col col-sm-12 col-md-4 col-lg-4 col-12">
                    <div className="card">
                        <div className="card-body">




                            <img src={img1}  alt="loding....." className="img-fluid rounded-circle   text-center " id="team-img2" />




                            <h5 className="card-title">alfahad</h5>
                            <p className="card-text">⭐⭐⭐⭐⭐</p>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor sit amet consectetur adipisicing , a ut.</p>
                           
                        </div>
                    </div>
                </div>







                <div className="col col-sm-12 col-md-4 col-lg-4 col-12">
                    <div className="card">
                        <div className="card-body">



                        <img src={img1}  alt="loding....." className="img-fluid rounded-circle   text-center " id="team-img2" />



                            <h5 className="card-title">alfahad</h5>
                            <p className="card-text">⭐⭐⭐⭐⭐</p>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor sit amet consectetur adipisicing , a ut.</p>
                           
                        </div>
                    </div>
                </div>








                <div className="col col-sm-12 col-md-4 col-lg-4 col-12">
                    <div className="card">
                        <div className="card-body">



                        <img src={img1}  alt="loding....." className="img-fluid rounded-circle   text-center " id="team-img2" />



                            <h5 className="card-title">alfahad</h5>
                            <p className="card-text">⭐⭐⭐⭐⭐</p>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor sit amet consectetur adipisicing , a ut.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}
