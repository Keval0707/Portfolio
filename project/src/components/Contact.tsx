import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const loadingToast = toast.loading('Sending message...');

    try {
      setIsSubmitting(true);
      const formData = new FormData(formRef.current);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (response.status === 200) {
        toast.success('Message sent successfully!', { id: loadingToast });
        formRef.current.reset();
      } else {
        toast.error(data.message || 'Failed to send message. Please try again.', { id: loadingToast });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 relative">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:kevaldhabalia0707@gmail.com"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  dhabaliakeval@gmail.com
                </a>
                <a
                  href="https://github.com/Keval0707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/keval-dhabalia-b2b3b7259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <input 
                type="hidden" 
                name="access_key" 
                value="25dbb9f6-a36f-4459-9d4c-c7c625003b58"
              />
              
              <input 
                type="hidden" 
                name="from_name" 
                value="Portfolio Contact Form"
              />
              
              <input 
                type="hidden" 
                name="subject" 
                value="New Contact Form Submission"
              />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};