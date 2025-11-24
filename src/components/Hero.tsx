import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './image/ImageWithFallback';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const badges = ['React', 'Django', 'Full-Stack', 'Mobile Developer'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6A3FB3]/30 to-[#00C67A]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#FF4B4B]/20 to-[#6A3FB3]/20 rounded-full blur-3xl"
        />

        {/* Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-20 h-20 border border-[#6A3FB3]/20 rounded-lg"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="text-[#00C67A]" size={20} />
              <span className="text-[#9B9BAF]">Available for hire</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="block text-[#E8E8F0]">Ayo Innocent</span>
              <span className="block bg-gradient-to-r from-[#6A3FB3] via-[#00C67A] to-[#FF4B4B] bg-clip-text text-transparent">
                Software Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 max-w-xl"
            >
              Building modern, scalable, and fully interactive digital experiences.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-[#1A1A24] border border-[#6A3FB3]/30 text-[#00C67A]"
                  style={{
                    boxShadow: '0 0 20px rgba(106, 63, 179, 0.2)'
                  }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('projects')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] flex items-center gap-2 shadow-lg shadow-[#6A3FB3]/30"
              >
                View Portfolio
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full border-2 border-[#6A3FB3] hover:bg-[#6A3FB3]/10 transition-colors"
              >
                Hire Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] rounded-3xl blur-2xl opacity-30" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762242298589-582f5f6c3fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM5NzE2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software Engineering"
                className="relative rounded-3xl border border-[#6A3FB3]/30 shadow-2xl w-full"
              />
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-[#1A1A24] p-4 rounded-2xl border border-[#00C67A]/30 shadow-lg shadow-[#00C67A]/20"
            >
              <Code2 className="text-[#00C67A]" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
