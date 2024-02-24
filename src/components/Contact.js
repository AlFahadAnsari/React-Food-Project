import React from 'react'





export default function Contact() {
  return (
    <div className='' id='Contact' >





      <section className="conatiner p-5  ">
        <div className="row">


          <div className="col col-sm-12 col-md-6 col-lg-6 col-12 ">

            <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="loading...." id='imgContact' className='img-fluid mt-5' />

          </div>

          <div className="col col-sm-12 col-md-6 col-lg-6 col-12">
            <h1 className='mt-5'> contact us</h1>
            <form className=" my-4  ">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Contact Number</label>
                <input type="number" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                {/* <label htmlFor="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="enter your address" /> */}
              
                <textarea class="form-control mt-3" id="exampleFormControlTextarea1" placeholder='enter your address' rows="8"></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary my-4">Submit</button>
              </div>
            </form>
          </div>

        </div>
      </section>


      <footer class="footer">
    <div class="container text-center fs-5">
      <span>&copy; 2024 Example Website. All rights reserved.</span>
    </div>
  </footer>

    </div>

  )
}
