import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission without backend
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-slate-950 pt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's work together</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email</span>
                <a href="mailto:hello@devfolio.com" className="text-2xl text-white hover:text-indigo-400 transition-colors font-semibold">
                  hello@devfolio.com
                </a>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Socials</span>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20'
                }`}
              >
                {isSubmitted ? (
                  <>
                    Sent Successfully <CheckCircle className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Alex Devson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;