import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const designs = [
  {
    title: 'BotR Rest App',
    description: 'A modern restaurant application interface with seamless ordering experience and intuitive navigation.',
    figma: 'https://www.figma.com/design/B81TvSurMR9iBOlDWAVTkh/BotRRestApp',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Startup Website',
    description: 'Clean and professional website design for startups with focus on conversion and user engagement.',
    figma: 'https://www.figma.com/design/vZCXuPwmxpNcKnUYQob8PJ/Startup-Website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Diet App',
    description:
      'Health-focused application design for tracking nutrition and maintaining healthy eating habits.',
    figma: 'https://www.figma.com/design/FyUfgsWijNsujdbPixKnZ7/Diet-App',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Learning App',
    description:
      'Educational platform design focusing on interactive learning and student engagement.',
    figma: 'https://www.figma.com/design/yOkhb8i5oQc5CmK3iNoim4/Learning-App',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Foodgo',
    description:
      'Food delivery application with an emphasis on quick ordering and real-time tracking.',
    figma: 'https://www.figma.com/design/Tdw0NbH4rhzU2dLDL2nWxC/Foodgo',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Hero Page',
    description:
      'Impactful landing page design that captures attention and drives user action.',
    figma: 'https://www.figma.com/design/UrEaJOZE926PhgTZNvClSz/Hero-Page',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'FoOdO',
    description:
      'Modern food discovery platform with social features and personalized recommendations.',
    figma: 'https://www.figma.com/design/G5csiuHSRMBvSSXRDyvTY1/FoOdO',
    image:
      'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Finance App',
    description:
      'Financial management application with clean interface and powerful analytics tools.',
    figma: 'https://www.figma.com/design/KcblxmJ1bXFNQNeFLwb8MJ/Finance',
    image:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000',
  },
  // ... other designs
];

export const DesignShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">UI/UX Designs</h2>
          <p className="text-gray-400">Creative design solutions for modern digital experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{design.title}</h3>
                  <p className="text-gray-300 mb-4">{design.description}</p>
                  <a
                    href={design.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>View in Figma</span>
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