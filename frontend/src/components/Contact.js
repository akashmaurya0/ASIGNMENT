import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import swal from 'sweetalert';

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

 
  const validateForm = () => {
    let newErrors = {};

    if (!userData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!userData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!userData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!userData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(userData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!userData.service) newErrors.service = "Please select a service";

    if (!userData.message.trim()) newErrors.message = "Message cannot be empty";

    if (!userData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

   
    const payload = {
      name: `${userData.firstName} ${userData.lastName}`.trim(),
      email: userData.email,
      phone: userData.phone,
      service: userData.service,
      message: userData.message,
      agree: userData.terms,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/contact", payload);
      if (res.status === 201) {
      swal(
  "Let's Secure Your Business",
  "You have successfully booked the call. Our team will get back to you within 24 hours.",
  "success"
);

        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          terms: false,
        });
        setErrors({});
      } else {
        swal("Success","Something went wrong. Please try again.","error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      swal("Error",
        err?.response?.data?.error ||
          "Server error. Please check your backend or network.","error"
      );
    }
  };

  return (
    <div className="container">
      <div className="contact-section">
        {/* Contact Info */}
        <div className="contact-info">
          <h4>Contact us</h4>
          <h2>Let’s Secure Your Business</h2>
          <p>
            Have questions about our services or need a custom security solution?
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          <p>📧 email@example.com</p>
          <p>📞 +1 (555) 000-0000</p>
          <p>📍 123 Sample St, Sydney NSW 2000 AU</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>

          <div className="service-type">
            <p>Service Type?</p>
            <label>
              <input
                type="radio"
                name="service"
                value="Web Application Security Audits"
                checked={userData.service === "Web Application Security Audits"}
                onChange={handleChange}
              />
              Web Application Security Audits
            </label>
            <label>
              <input
                type="radio"
                name="service"
                value="Cloud Security Assessments"
                checked={userData.service === "Cloud Security Assessments"}
                onChange={handleChange}
              />
              Cloud Security Assessments
            </label>
            <label>
              <input
                type="radio"
                name="service"
                value="PCI DSS Gap Assessments"
                checked={userData.service === "PCI DSS Gap Assessments"}
                onChange={handleChange}
              />
              PCI DSS Gap Assessments
            </label>
            <label>
              <input
                type="radio"
                name="service"
                value="Security Awareness Training"
                checked={userData.service === "Security Awareness Training"}
                onChange={handleChange}
              />
              Security Awareness Training
            </label>
            {errors.service && <p className="error">{errors.service}</p>}
          </div>

          <div className="form-group">
            <textarea
              placeholder="Type your message..."
              name="message"
              value={userData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              checked={userData.terms}
              onChange={handleChange}
            />
            <span>I accept the Terms</span>
          </div>
          {errors.terms && <p className="error">{errors.terms}</p>}

          <button type="submit" className="submit-btn">
            Book your call
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
