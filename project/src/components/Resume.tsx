import { motion } from 'framer-motion';
import { FileDown, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Web Development Internship',
    company: 'InternPe',
    period: 'June 2024 - July 2024',
    description: 'Led the development of multiple web applications using React and TypeScript.',
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'],
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Charotar University of Science and Technology [CHARUSAT]',
    period: '2023 - Present',
    description: 'Major in Software Engineering',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'N. G. Patel Polytechnic [NGPP]',
    period: '2021 - 2023',
    description: 'Major in Computer Engineering',
  },
];

export const Resume = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <a
            href="https://kevalresume.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FileDown size={20} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-3">{exp.period}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-blue-400 mb-2">{edu.school}</p>
                <p className="text-gray-400 mb-3">{edu.period}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};