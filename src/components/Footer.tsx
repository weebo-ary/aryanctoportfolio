import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: personalInfo.social.linkedin,
      icon: <Linkedin size={20} />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      href: personalInfo.social.github,
      icon: <Github size={20} />,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Showwcase',
      href: personalInfo.social.showwcase,
      icon: <ExternalLink size={20} />,
      color: 'hover:text-purple-600'
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: <Mail size={20} />,
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-400 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{personalInfo.name}</h3>
                  <p className="text-gray-400 text-sm">{personalInfo.title}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building innovative solutions and leading technical teams to drive digital transformation. 
                Always exploring new technologies and methodologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <div className="space-y-3 text-gray-400">
                <p>📧 {personalInfo.email}</p>
                <p>📍 {personalInfo.location}</p>
                <p>💼 Available for consulting</p>
                
                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.name !== 'Email' ? '_blank' : undefined}
                      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`p-2 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-colors hover:bg-gray-700`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 fill-current animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
            
            <div className="text-center mt-4 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                "Technology is not just about code; it's about creating solutions that make a difference."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;