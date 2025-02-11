import React, { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DesignShowcase } from './components/DesignShowcase';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    document.body.classList.add('custom-cursor');
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CustomCursor />
        <Hero />
        <ProjectShowcase />
        <DesignShowcase />
        <Skills />
        <Resume />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;