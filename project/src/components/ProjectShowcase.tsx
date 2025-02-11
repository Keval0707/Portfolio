import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Crypto Tracker',
    description: 'A comprehensive cryptocurrency tracking application that provides real-time price updates, market trends, and portfolio management features.',
    github: 'https://github.com/Keval0707/Crypto-Tracker',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Cryptocurrency', 'API Integration', 'Real-time Data'],
  },
  {
    title: 'BookStore',
    description: 'An online bookstore platform allowing users to browse, search, and purchase books with a modern and intuitive interface.',
    github: 'https://github.com/Keval0707/BookStore',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'E-commerce', 'Book Management', 'User Authentication'],
  },
  {
    title: 'Finance Dashboard',
    description: 'A comprehensive financial dashboard providing insights, analytics, and visualization of financial data for better decision making.',
    github: 'https://github.com/Keval0707/Finance-Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Data Visualization', 'Financial Analytics', 'Dashboard'],
  },
  {
    title: 'Sentiment Analysis',
    description: 'A web-based Sentiment Analysis app that analyzes text to determine its sentiment (positive, negative, or neutral) using NLP techniques, with a user-friendly interface for real-time insights.',
    github: 'https://github.com/Keval0707/sentiment-analysis-app',
    image: 'https://www.freepik.com/free-vector/emotional-feedback-concept-illustration_37188853.htm#fromView=keyword&page=1&position=8&uuid=21d765c7-3a22-4e3a-832e-8fc683b4772e&query=Sentiment+Analysis',
    tags: ['Python','React js','NLP','Text Processing','Web App'],
  }
];

export const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400">Featured development projects showcasing my technical expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};