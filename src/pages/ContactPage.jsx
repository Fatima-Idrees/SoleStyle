import { useState } from 'react'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <div className="contact-page">
        <div className="container">
          {/* Header */}
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
          </div>

          <div className="contact-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Visit Us (Pakistan)</h3>
                  <p>Shop #45, Millennium Mall,</p>
                  <p>Main Boulevard, Gulberg,</p>
                  <p>Lahore, Pakistan</p>
                  <p className="small-text">Also available in Karachi & Islamabad</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+92 300 1234567</p>
                  <p>+92 42 12345678</p>
                  <p className="small-text">Mon-Fri, 9am-6pm (PKT)</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>support@solestyle.pk</p>
                  <p>sales@solestyle.pk</p>
                  <p className="small-text">We reply within 24 hours</p>
                </div>
              </div>

              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                ></textarea>

                <button type="submit" className="submit-btn">
                  Send Message
                  <i className="fas fa-arrow-right"></i>
                </button>

                {submitted && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>

          
          <div className="map-section">
            <div className="map-container">
              <iframe
                title="Pakistan Store Location - Lahore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217538.7798674506!2d74.16378417431639!3d31.482359000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sGulberg%2C%20Lahore!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-cities">
              <div className="city-badge active">📍 Lahore (Main Store)</div>
              <div className="city-badge">📍 Karachi (Outlet)</div>
              <div className="city-badge">📍 Islamabad (Coming Soon)</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage