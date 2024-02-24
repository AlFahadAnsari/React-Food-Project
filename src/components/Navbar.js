import React from 'react'
import './All.css'
import { useState } from 'react'


 



export default function Navbar(props) {

   

    return (
        <div id='home'>




            <nav className="navbar navbar-expand-lg bg-body-tertiary " id='fixNav'>
                <div className="container-fluid mx-4">


                    <a className="navbar-brand" href="#"  data-aos="flip-right">AlFahad Ansari</a>



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">


                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="#menu">Menu</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="#rating">Rating</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>






            {/* ? burger img  */}

            <div className="container-fluid" id='bg'>

                <div className="tags">
                 <div className="main">


                    <h1 className='navh1'>eat right food</h1> 


                     <p className='navpara'>eat healty its good for our health</p>


                    {/* <button className={`btn btn-${props.btnColor} text-white rounded-4 p-2`}>menu</button> */}

                    <button className="btn btn-dark text-white rounded-4 p-2" id='hover'><a href="#menu" id='hoveratag'>menu</a></button>

                 </div>
                </div>  
            </div>







        </div>



    )
}
