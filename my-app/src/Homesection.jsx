import React from 'react';
import image1 from "./4.png"
const Features = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="row" >
          <div className="col-xl " height={100}>
          <img src={image1} className='img-fluid' alt=""  />
          </div>
          <div className="col-xl ">
          <div className="jumbotron jumbotron-fluid text-dark bg-light h-100 ">
      <h1 className="font-weight-bold text-danger text-center">
      STARTUP<br /></h1> <h1 className='text-center '>PROGRAM </h1>
      <p className="lead text-center ">"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."<br /><br />
      <button className='btn btn-danger'>Register</button></p>
          </div>
         </div>
        </div></div>
</>
  );
};

export default Features;

