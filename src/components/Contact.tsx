import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiSend } from 'react-icons/fi';
import { SOCIALS } from '../data/socials';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Get In Touch</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's build something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Email Me</h4>
                  <p className="text-lg text-white font-medium">{SOCIALS.email}</p>
                </div>
              </a>

              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0a66c2]/20 text-[#0a66c2] group-hover:scale-110 transition-transform">
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">LinkedIn</h4>
                  <p className="text-lg text-white font-medium">Connect Professionally</p>
                </div>
              </a>

              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <FiGithub size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">GitHub</h4>
                  <p className="text-lg text-white font-medium">Check my Code</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>Send Message <FiSend /></>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 text-center text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;