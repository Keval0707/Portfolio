import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

export const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = image.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      image.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
        translateZ(20px)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h2 className="text-2xl font-light">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Keval Dhabalia
          </h1>
          <div className="text-xl md:text-2xl text-gray-300">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'UI/UX Designer',
                  'Tech Enthusiast'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-gray-400 max-w-lg">
            Crafting digital experiences through code and creativity. 
            Specialized in building modern web applications with cutting-edge technologies.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Keval0707"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors inline-flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kevaldhabalia18/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors inline-flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:dhabaliakeval@gmail.com"
              className="p-2 hover:text-blue-400 transition-colors inline-flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email Me"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://kevalresume.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Resume"
            >
              <FileDown size={20} />
              <span>Resume</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <img
              ref={imageRef}
              src="https://i.postimg.cc/W4KbggR6/keval.png"
              alt="Keval Dhabalia"
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-200"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};