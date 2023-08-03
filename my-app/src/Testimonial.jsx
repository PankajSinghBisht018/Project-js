import React from 'react';

const Testimonials = () => {
  return (
    <section style={{ color: '#000', backgroundColor: '#f3f2f2' }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="fw-bold mb-4">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card">
              <div className="card-body py-4 mt-2">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="/images/man3.jpg"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                    alt='/'
            
                  />
                </div>
                <h5 className="font-weight-bold">Harry</h5>
                <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star-half-alt fa-sm text-info"></i>
                  </li>
                </ul>
                <p className="mb-2">
                  <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                  ad velit ab hic tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card">
              <div className="card-body py-4 mt-2">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="/images/man2.jpg"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                  alt='/'
                  />
                </div>
                <h5 className="font-weight-bold">David</h5>
                <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                </ul>
                <p className="mb-2">
                  <i className="fas fa-quote-left pe-2"></i>Autem, totam debitis suscipit saepe
                  sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
                  labore laboriosam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-0">
            <div className="card">
              <div className="card-body py-4 mt-2">
                <div className="d-flex justify-content-center mb-4">
                  <img
                    src="/images/man1.jpg"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                    alt='/'
                  />
                </div>
                <h5 className="font-weight-bold">Horwitz</h5>
                <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-info"></i>
                  </li>
                  <li>
                    <i className="far fa-star fa-sm text-info"></i>
                  </li>
                </ul>
                <p className="mb-2">
                  <i className="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
                  nulla metus scelerisque ante sollicitudin commodo cras purus odio,
                  vestibulum in tempus viverra turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
