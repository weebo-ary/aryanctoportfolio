import React from 'react';
import { Award, Target, Code, Users } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="text-yellow-500" size={24} />,
      title: "EHacks'21 Winner",
      description: "Won the prestigious EHacks'21 hackathon with innovative tech solution"
    },
    {
      icon: <Target className="text-green-500" size={24} />,
      title: "AICTE Ideathon",
      description: "Multiple wins in AICTE Ideathon for breakthrough ideas and implementations"
    },
    {
      icon: <Code className="text-blue-500" size={24} />,
      title: "Tech Leadership",
      description: "Successfully transitioned from developer to CTO, leading engineering teams"
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: "Team Builder",
      description: "Built and scaled engineering teams from ground up at multiple organizations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-gray-50 dark:from-red-900/20 dark:to-gray-800/20 p-6 rounded-xl border-l-4 border-red-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  My Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To leverage technology as a catalyst for business transformation, building scalable solutions 
                  that not only solve today's problems but anticipate tomorrow's opportunities. I believe in 
                  fostering innovation through collaborative leadership and strategic technical vision.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">B.Tech ECE Graduate</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">5+ Years Experience</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Team Leadership</span>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg mr-3">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;