import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './App.css'
export default function Footer() {
  return (
    <>
   <section class="">
  <footer class="bg-danger text-white text-center text-md-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Register Startup</h5>
          <p>
         A startup in web development is a newly established company <br/>that focuses on providing innovative solutions and services related to web technologies.<br/> These startups are usually founded by entrepreneurs with a vision to address specific challenges or gaps in the web development industry. .      </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Social Platforms</h5>
          <ul class="list-unstyled mb-0">
            <li>
            <a href="#!" class="text-white"><FontAwesomeIcon icon={faLinkedin} size='lg' className='px-2'/>Linked in</a>
            </li>
            <li>
              <a href="#!" class="text-white"><FontAwesomeIcon icon={faInstagramSquare} size='lg' className='px-2'/>Instagram</a>
            </li>
            <li>
              <a href="#!" class="text-white"><FontAwesomeIcon icon={faFacebookSquare} size='lg' className='px-2'/>Facebook</a>
            </li>
            <li>
              <a href="#!" class="text-white"><FontAwesomeIcon icon={faGithubSquare} size='lg' className='px-2'/>Github</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">CONTACT US</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white"><FontAwesomeIcon icon={faEnvelope} size='md' className='px-2'/>Register@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center py-3">
      © 2023 Copyright :
      <a class="text-white" href="https://mdbootstrap.com/"> Register.com</a>
    </div>
  </footer>
</section>
    </>
  );
}
