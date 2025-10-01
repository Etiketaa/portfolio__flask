import React from 'react';

const skillsList = [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "React",
  "Python (Flask)",
  "PHP",
  "Laravel",
  "Bases de Datos",
  "Node.js",
  "SQL (MySQL)",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Habilidades Principales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"> {/* Changed grid-cols-2 to grid-cols-1 */}
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center text-gray-800 dark:text-gray-200 font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
