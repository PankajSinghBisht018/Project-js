// FormComponent.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


const FormComponent = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  
  },[]);
  const [formData, setFormData] = useState({
    name: '',
    jobCategory: '',
    phoneNumber: '',
    email: '',
    experienceLevel: '',
    location: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const jobCategories = ['Software Engineer', 'Web Developer', 'Frontend Developer', 'Backend Developer'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        errors[key] = 'This field is required.';
      }
    });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        jobCategory: '',
        phoneNumber: '',
        email: '',
        experienceLevel: '',
        location: ''
      });
    }
  };

  return (
    <div className="container-fluid" data-aos="fade-right" data-aos-anchor-placement="">
      <div className="row">
      <div className="col-md-6 form-container-fluid">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {formErrors.name && <Form.Text className="error">{formErrors.name}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="jobCategory">
              <Form.Label>Job Category:</Form.Label>
              <Form.Control
                as="select"
                name="jobCategory"
                value={formData.jobCategory}
                onChange={handleInputChange}
                required
              >
                <option value="">Select job category</option>
                {jobCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
              {formErrors.jobCategory && <Form.Text className="error">{formErrors.jobCategory}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              {formErrors.phoneNumber && <Form.Text className="error">{formErrors.phoneNumber}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {formErrors.email && <Form.Text className="error">{formErrors.email}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="experienceLevel">
              <Form.Label>Experience Level:</Form.Label>
              <Form.Control
                type="text"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                required
              />
              {formErrors.experienceLevel && <Form.Text className="error">{formErrors.experienceLevel}</Form.Text>}
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location:</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
              {formErrors.location && <Form.Text className="error">{formErrors.location}</Form.Text>}
            </Form.Group>
            <br />

            <Button type="submit">Submit</Button>
          </Form>
        </div>
        <div className="col-md-6 image-container">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Your Image"
          />
        </div>
        
      </div>
    </div>
  );
};

export default FormComponent;
