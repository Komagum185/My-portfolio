import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6">
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A3FB3] via-[#00C67A] to-[#FF4B4B]" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#9B9BAF]"
          >
            <span>© 2024 Ayo Innocent. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="text-[#FF4B4B]" size={16} fill="#FF4B4B" />
            </motion.div>
            <span>in Uganda</span>
          </motion.div>

          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#6A3FB3] to-[#00C67A] bg-clip-text text-transparent"
          >
            Ayo Innocent
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 text-[#9B9BAF]"
          >
            <a href="#privacy" className="hover:text-[#6A3FB3] transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-[#00C67A] transition-colors">
              Terms
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
