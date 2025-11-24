import { motion } from 'motion/react';
import { Code2, Database, Laptop, BarChart, Palette } from 'lucide-react';
import './experience.css';

export function Experience() {
  const experiences = [
    {
      company: 'Questbanker',
      role: 'Software Support Developer',
      period: '2024 – 2025',
      icon: Code2,
      theme: 'purple',
      responsibilities: [
        'Developing and maintaining educational software platform',
        'Building interactive quiz and assessment systems',
        'Implementing user analytics and reporting features',
        'Providing technical support and bug fixes',
      ],
    },
    {
      company: 'Makerere University SPH',
      role: 'Data Manager',
      period: '2022 – 2024',
      icon: Database,
      theme: 'green',
      responsibilities: [
        'Managing PostgreSQL databases for health research projects',
        'Creating data visualization dashboards and reports',
        'Implementing data validation and quality control systems',
        'Collaborating with research teams on data analysis',
      ],
    },
    {
      company: 'Service Cops',
      role: 'React Native Developer',
      period: '2021 – 2022',
      icon: Laptop,
      theme: 'red',
      responsibilities: [
        'Developed cross-platform mobile applications',
        'Implemented real-time features using Firebase',
        'Optimized app performance and user experience',
        'Collaborated with design team on UI/UX implementation',
      ],
    },
    {
      company: 'Caystard Technologies',
      role: 'Frontend/Website Developer',
      period: '2024 – 2025',
      icon: BarChart,
      theme: 'purple',
      responsibilities: [
        'Building responsive websites with Next.js and React',
        'Building modern cross-platform mobile apps with react native and flutter',
        'Implementing modern UI/UX designs with Tailwind CSS',
        'Integrating third-party APIs and services',
        'Ensuring cross-browser compatibility and accessibility',
      ],
    },
    {
      company: 'Achend Company Limited',
      role: 'Frontend/Website Developer',
      period: '2019 – 2021',
      icon: BarChart,
      theme: 'purple',
      responsibilities: [
        'Building the comapany website with wordpress',
        'Maintaining the webiste and updating content',
        'Ensuring cross-browser compatibility and accessibility',
      ],
    },
    {
      company: 'Brandora',
      role: 'Website Designer',
      period: '2023 – 2024',
      icon: Palette,
      theme: 'green',
      responsibilities: [
        'Designing and prototyping modern website layouts',
        'Creating brand identity and visual design systems',
        'Implementing responsive designs with HTML/CSS/JS',
        'Managing client projects and delivering on schedule',
      ],
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
            Work <span className="bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            A journey through innovative projects and collaborative teams
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-[#1A1A24] rounded-3xl p-8 border border-white/5 relative overflow-hidden group experience-card experience-theme-${exp.theme}`}
            >
              {/* Gradient Border Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl experience-gradient"
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Company Logo Placeholder */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center experience-logo"
                    >
                      <exp.icon size={28} className="experience-icon" />
                    </motion.div>

                    <div>
                      <h3 className="text-[#E8E8F0] mb-1">{exp.role}</h3>
                      <div className="text-[#9B9BAF]">{exp.company}</div>
                    </div>
                  </div>

                  <div
                    className="px-4 py-2 rounded-full text-sm experience-period-badge"
                  >
                    {exp.period}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 experience-responsibility-dot" />
                      <p className="text-[#9B9BAF]">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -right-4 opacity-5"
                >
                  <exp.icon size={120} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
