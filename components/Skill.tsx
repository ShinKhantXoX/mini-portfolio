const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Figma'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={skill.category}>
              <div className="border border-white/20 bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-light text-white mb-6">
                  {skill.category}
                </h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm md:text-base text-gray-400 font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}