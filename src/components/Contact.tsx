import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Uganda',
      color: '#6A3FB3',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+256 706536024',
      color: '#00C67A',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'komagum75@gmail.com',
      color: '#FF4B4B',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Komagum185',
      color: '#6A3FB3',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/ìnnocent-ayo-5ab492130',
      color: '#00C67A',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://x.com/KomagumAyo',
      color: '#FF4B4B',
    },
  ];

  return (
    <section className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4">
            Get In <span className="bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-[#1A1A24] p-6 rounded-2xl border border-white/5 flex items-center gap-4"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${info.color}20`,
                      border: `1px solid ${info.color}40`,
                    }}
                  >
                    <info.icon size={24} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-[#9B9BAF] mb-1">{info.label}</div>
                    <div className="text-[#E8E8F0]">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#E8E8F0] mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      backgroundColor: `${social.color}20`,
                      border: `1px solid ${social.color}40`,
                    }}
                  >
                    <social.icon size={24} style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mt-12 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6A3FB3]/30 to-[#00C67A]/30 rounded-3xl blur-3xl" />
              <div className="relative bg-[#1A1A24] p-8 rounded-3xl border border-[#6A3FB3]/30">
                <p className="text-[#9B9BAF] italic">
                  "Building the future, one line of code at a time. Let's create something extraordinary together."
                </p>
                <div className="mt-4 text-[#00C67A]">— Ayo Innocent</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#E8E8F0] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-[#1A1A24] border border-white/10 rounded-2xl text-[#E8E8F0] focus:border-[#6A3FB3] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#E8E8F0] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-[#1A1A24] border border-white/10 rounded-2xl text-[#E8E8F0] focus:border-[#00C67A] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#E8E8F0] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-[#1A1A24] border border-white/10 rounded-2xl text-[#E8E8F0] focus:border-[#FF4B4B] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#6A3FB3]/30"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send size={20} />
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
