import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Travola App',
      description: 'Full-featured ride-hailing mobile application with real-time tracking, payment integration, and driver-rider matching system.',
      tech: ['React Native', 'Swift UI', 'Firebase', 'Google Maps'],
      image: 'https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzYzOTE0MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#6A3FB3',
    },
    {
      title: 'Savings & Loan System',
      description: 'Comprehensive financial management platform with automated calculations, loan processing, and detailed reporting for microfinance institutions.',
      tech: ['Django', 'PostgreSQL', 'Redis', 'Celery'],
      image: 'https://images.unsplash.com/photo-1730818876455-abd3318be279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzYzOTcxNjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#00C67A',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with dynamic product catalog, cart management, and seamless checkout powered by headless CMS.',
      tech: ['Next.js', 'Tailwind CSS', 'Sanity.io', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2Mzk2MTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#FF4B4B',
    },
    {
      title: 'Education Admin Dashboard',
      description: 'Complete school management system with student records, grade tracking, attendance monitoring, and parent communication.',
      tech: ['Angular', 'CodeIgniter', 'PostgreSQL', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1691725909676-105654d24649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzOTM3NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#6A3FB3',
    },
    {
      title: 'MSE Admin Dashboard',
      description: 'Analytics-focused dashboard with authentication, dynamic menu system, data visualization, and comprehensive reporting tools.',
      tech: ['React', 'Tailwind CSS', 'Recharts', 'JWT'],
      image: 'https://images.unsplash.com/photo-1691725909676-105654d24649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzOTM3NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#00C67A',
    },
    {
      title: 'Simular.ai Clone',
      description: 'Pixel-perfect replication of modern AI platform interface with responsive design and interactive components.',
      tech: ['Next.js', 'Tailwind CSS', 'Motion', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2Mzk2MTcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#FF4B4B',
    },
    {
      title: 'Betting Hero Page',
      description: 'Eye-catching landing page for sports betting platform with green theme, live odds display, and engaging animations.',
      tech: ['Vue.js', 'SCSS', 'GSAP', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzYzOTE0MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#00C67A',
    },
    {
      title: 'Digital School Sickbay System',
      description: 'Healthcare management system for educational institutions with patient records, medication tracking, and appointment scheduling.',
      tech: ['CodeIgniter', 'PostgreSQL', 'Bootstrap', 'jQuery'],
      image: 'https://images.unsplash.com/photo-1691725909676-105654d24649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzOTM3NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#6A3FB3',
    },
    {
      title: 'Smart Task Management System',
      description: 'Intelligent project management platform with task automation, team collaboration, and productivity analytics.',
      tech: ['Django', 'REST API', 'WebSockets', 'Redis'],
      image: 'https://images.unsplash.com/photo-1691725909676-105654d24649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzOTM3NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#FF4B4B',
    },
    {
      title: 'Travelo App (Updated)',
      description: 'Redesigned travel booking application with enhanced UI/UX, destination discovery, and trip planning features.',
      tech: ['React Native', 'Figma', 'Firebase', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzYzOTE0MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#00C67A',
    },
    {
      title: 'Banking System',
      description: 'Full-featured banking backend with account management, transactions, interest calculations, and security features.',
      tech: ['Django', 'PostgreSQL', 'JWT', 'Docker'],
      image: 'https://images.unsplash.com/photo-1730818876455-abd3318be279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzYzOTcxNjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#6A3FB3',
    },
    {
      title: 'Loan Management & Ledger System',
      description: 'Advanced financial platform combining loan processing with comprehensive double-entry ledger accounting system.',
      tech: ['Django', 'React', 'PostgreSQL', 'PDF Generation'],
      image: 'https://images.unsplash.com/photo-1730818876455-abd3318be279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzYzOTcxNjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
            Featured <span className="bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            A showcase of innovative solutions across web, mobile, and enterprise applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-[#1A1A24] rounded-3xl overflow-hidden border border-white/5 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#6A3FB3]/90 to-[#00C67A]/90 flex items-center justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                  >
                    <Github className="text-white" size={20} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-[#E8E8F0] mb-3">{project.title}</h3>
                <p className="text-[#9B9BAF] mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                  style={{
                    backgroundColor: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                  }}
                >
                  View Case Study
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
