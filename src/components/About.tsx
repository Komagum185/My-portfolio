import { motion } from 'motion/react';
import { Code, Smartphone, Database, Brain, Award, Calendar } from 'lucide-react';
import { ImageWithFallback } from './image/ImageWithFallback';

export function About() {
  const skills = [
    { name: 'React & Next.js', level: 95, color: '#6A3FB3' },
    { name: 'Django & Python', level: 90, color: '#00C67A' },
    { name: 'React Native', level: 85, color: '#FF4B4B' },
    { name: 'TypeScript', level: 88, color: '#6A3FB3' },
    { name: 'PostgreSQL', level: 82, color: '#00C67A' },
    { name: 'Tailwind CSS', level: 92, color: '#FF4B4B' },
  ];

  const timeline = [
    {
      year: '2024 - Present',
      title: 'Software Support Developer',
      company: 'Questbanker',
      icon: Code,
    },
    {
      year: '2024 - 2025',
      title: 'Frontend Developer',
      company: 'Caystart Technologies',
      icon: Smartphone,
    },
    {
      year: '2023 - 2024',
      title: 'Website Designer',
      company: 'Brandora',
      icon: Database,
    },
    {
      year: '2022 - 2024',
      title: 'Data Manager',
      company: 'Makerere University SPH',
      icon: Brain,
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
            About <span className="bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Passionate about creating innovative solutions and staying at the forefront of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Photo & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6A3FB3] via-[#00C67A] to-[#FF4B4B] blur-xl opacity-50"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496358200-b31ccc7cf552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwYWZyaWNhbnxlbnwxfHx8fDE3NjM5NzE2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ayo Innocent"
                className="relative w-64 h-64 rounded-full border-4 border-[#6A3FB3]/30 object-cover shadow-2xl"
              />
            </div>

            <div className="space-y-4">
              <p>
                I'm a <strong className="text-[#00C67A]">Software Engineer</strong> with strong experience in full-stack development, specializing in building scalable web and mobile applications.
              </p>
              <p>
                My expertise spans across modern frameworks like <strong className="text-[#6A3FB3]">React, Next.js, and Django</strong>, with a passion for creating intuitive user experiences and robust backend systems.
              </p>
              <p>
                As an <strong className="text-[#FF4B4B]">AI-Native engineering learner</strong>, I continuously explore cutting-edge technologies and best practices to deliver innovative digital solutions.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-[#1A1A24] p-4 rounded-2xl border border-[#6A3FB3]/20 text-center">
                  <Award className="text-[#00C67A] mx-auto mb-2" size={24} />
                  <div className="text-[#E8E8F0]">12+</div>
                  <div className="text-[#9B9BAF]">Projects</div>
                </div>
                <div className="bg-[#1A1A24] p-4 rounded-2xl border border-[#00C67A]/20 text-center">
                  <Code className="text-[#6A3FB3] mx-auto mb-2" size={24} />
                  <div className="text-[#E8E8F0]">5+</div>
                  <div className="text-[#9B9BAF]">Years Exp</div>
                </div>
                <div className="bg-[#1A1A24] p-4 rounded-2xl border border-[#FF4B4B]/20 text-center">
                  <Smartphone className="text-[#FF4B4B] mx-auto mb-2" size={24} />
                  <div className="text-[#E8E8F0]">50+</div>
                  <div className="text-[#9B9BAF]">Clients</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-[#E8E8F0]">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-[#E8E8F0]">{skill.name}</span>
                    <span className="text-[#9B9BAF]">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-[#1A1A24] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}, ${skill.color}dd)`,
                        boxShadow: `0 0 10px ${skill.color}50`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-12 text-center text-[#E8E8F0]">Career Timeline</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1A1A24] p-6 rounded-2xl border border-[#6A3FB3]/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6A3FB3] to-[#00C67A]" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#6A3FB3]/20">
                    <item.icon className="text-[#00C67A]" size={24} />
                  </div>
                  <Calendar className="text-[#9B9BAF]" size={16} />
                </div>
                <div className="text-[#9B9BAF] mb-2">{item.year}</div>
                <h3 className="text-[#E8E8F0] mb-1">{item.title}</h3>
                <div className="text-[#6A3FB3]">{item.company}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
