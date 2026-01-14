import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission

    // This is a simulation. In a real app, you would make an API call here.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000); // Hide status after 5s
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact Form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Your message here..."></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitStatus === 'success' && <p className="submit-feedback success" role="alert">Thank you! Your message has been sent.</p>}
              {submitStatus === 'error' && <p className="submit-feedback error" role="alert">Oops! Something went wrong. Please try again.</p>}
            </form>
          </div>

          <div className="contact-info">
            <a href="mailto:ritikempire505@gmail.com" className="contact-link-item">
              <FiMail />
              <span>ritikempire505@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-gaud-cse" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <FiLinkedin />
              <span>linkedin.com/in/abhishek-gaud-cse</span>
            </a>
            <a href="tel:+919171214043" className="contact-link-item">
              <FiPhone />
              <span>+91 91712 14043</span>
            </a>
            <a href="https://github.com/abhishekgaud7" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <FiGithub />
              <span>github.com/abhishekgaud7</span>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;