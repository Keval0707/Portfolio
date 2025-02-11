import { motion } from 'framer-motion';
import { Code2, Palette, Database, Terminal } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing'],
  },
  {
    icon: Terminal,
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
  },
];

export const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}