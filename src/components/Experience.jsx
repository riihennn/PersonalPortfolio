import React, { useEffect, memo } from 'react';
import DotField from './DotField';

const calculateDuration = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  if (totalMonths <= 0) return '1 mo';
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';
  if (years > 0 && months > 0) return `${yearStr} ${monthStr}`;
  return yearStr || monthStr || '1 mo';
};

const ExperienceSection = memo(function ExperienceSection({ theme = 'dark', setTheme = () => {} }) {
  const experiences = [
    {
      id: 1,
      period: `Oct 2026 - Present · ${calculateDuration('2026-10-01')}`,
      title: 'Full Stack Developer',
      company: 'Hexa Branding',
      type: 'Full-time • On-site',
      description:
        'Developing and maintaining full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Building REST APIs, implementing authentication and authorization, integrating third-party services, and delivering high-performance, scalable web solutions.',
      responsibilities: [
        'Developing and maintaining full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB',
        'Designing and implementing robust RESTful APIs with secure authentication and authorization',
        'Building responsive, modern user interfaces and optimizing web applications for maximum speed and scalability',
        'Integrating third-party services and managing MongoDB database architectures',
        'Collaborating with cross-functional teams to translate business requirements into production-ready features',
        'Optimizing application performance, security, and deploying full-stack solutions'
      ],
      technologies: [
        'React.js',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JavaScript',
        'TypeScript',
        'REST APIs',
        'Tailwind CSS',
        'Redux',
        'Git',
        'GitHub',
        'Postman'
      ]
    },
    {
      id: 2,
      period: 'Jul 2025 - Sep 2026 · 1 yr 3 mos',
      title: 'Full Stack Developer Intern',
      company: 'Bridgeon',
      type: 'Internship • On-site',
      description:
        'Worked as a Full Stack Developer Intern at Bridgeon, building end-to-end web solutions and combining responsive front-end interfaces with robust back-end systems using the MERN stack.',
      responsibilities: [
        'Developing and maintaining full-stack web applications using the MERN stack',
        'Building responsive and modern user interfaces with React.js, Next.js, Tailwind CSS, and Bootstrap',
        'Designing and integrating RESTful APIs using Node.js and Express.js',
        'Managing databases and data models using MongoDB',
        'Optimizing application performance, security, and user experience',
        'Collaborating with designers, developers, and stakeholders to deliver business requirements',
        'Using Git and GitHub for version control and team collaboration',
        'Deploying and maintaining applications on cloud platforms and production environments'
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Bootstrap',
        'Tailwind',
        'Redux',
        'React.js',
        'Next.js',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Git',
        'AWS',
        'GitHub',
        'Postman',
        'Responsive Design'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );

    const section = document.getElementById('experience');
    if (section) themeObserver.observe(section);

    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-24 xl:px-24 py-20 relative z-10">
        
        {/* Header */}
        <div className="mb-20 reveal">
          <p className="text-neutral-500 tracking-[0.3em] text-sm uppercase mb-4">
            — PROFESSIONAL JOURNEY —
          </p>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold ${theme === 'light' ? 'text-black' : 'text-neutral-100'} leading-tight mb-6 transition-colors duration-700`}>
            Experience
          </h1>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold ${theme === 'light' ? 'text-black' : 'text-neutral-100'} leading-tight italic mb-8 transition-colors duration-700`}>
            Timeline
          </h1>
          <p className="text-neutral-400 text-lg max-w-3xl leading-relaxed">
            Tracking my journey through web development, from foundational skills to 
            full-stack expertise, building impactful digital solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b ${theme === 'light' ? 'from-neutral-200 via-neutral-400 to-neutral-200' : 'from-neutral-800 via-neutral-600 to-neutral-800'} transition-colors duration-700`}></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative mb-16 reveal reveal-left"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 ${theme === 'light' ? 'bg-black border-white shadow-black/20' : 'bg-neutral-100 border-black shadow-neutral-500/50'} rounded-full border-4 shadow-lg transition-colors duration-700`}></div>

              {/* Content Card */}
              <div className={`relative overflow-hidden ml-6 md:ml-20 ${theme === 'light' ? 'bg-white border-neutral-300 hover:border-black hover:bg-neutral-50' : 'bg-neutral-900/90 border-neutral-700/50 hover:border-neutral-500 hover:bg-neutral-800'} border rounded-lg p-5 md:p-8 transition-all duration-500`}>
                <div className="absolute inset-0 z-0">
                  <DotField
                    dotRadius={1.5}
                    dotSpacing={14}
                    bulgeStrength={67}
                    glowRadius={160}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={500}
                    cursorForce={0.1}
                    bulgeOnly
                    gradientFrom="#A855F7"
                    gradientTo="#B497CF"
                    glowColor="#120F17"
                  />
                </div>
                <div className="relative z-10 grid md:grid-cols-3 gap-8">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-2">
                    <p className={`${theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'} text-xs sm:text-sm font-medium tracking-wide mb-3 transition-colors duration-700`}>
                      {exp.period}
                    </p>
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${theme === 'light' ? 'text-black' : 'text-neutral-100'} transition-colors duration-700`}>
                      {exp.title}
                    </h2>
                    <p className={`text-xl ${theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'} mb-6 transition-colors duration-700`}>
                      {exp.company} <span className="text-neutral-500">• {exp.type}</span>
                    </p>
                    <p className={`${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'} leading-relaxed mb-8 transition-colors duration-700`}>
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-neutral-100'} transition-colors duration-700`}>
                        Key Responsibilities & Learning
                      </h3>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li 
                            key={idx}
                            className={`flex items-start ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'} reveal reveal-left transition-colors duration-700`}
                            style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                          >
                            <span className="text-neutral-500 mr-3 mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Technologies */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-6 ${theme === 'light' ? 'text-black' : 'text-neutral-100'} transition-colors duration-700`}>
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 ${theme === 'light' ? 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-black hover:text-white' : 'bg-neutral-800/50 border-neutral-700 text-neutral-300 hover:bg-neutral-100 hover:text-black hover:border-neutral-100'} border rounded text-xs transition-all duration-300 cursor-default transform hover:scale-105`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline End Indicator */}
          <div 
            className="relative ml-8 md:ml-20 reveal"
          >
            <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 ${theme === 'light' ? 'bg-neutral-300 border-white' : 'bg-neutral-700 border-black'} rounded-full border-4 transition-colors duration-700`}></div>
            <p className={`${theme === 'light' ? 'text-neutral-500' : 'text-neutral-600'} text-sm italic transition-colors duration-700`}>More experiences coming soon...</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center gap-2">
            <p className="text-neutral-600 text-xs tracking-widest">CONTINUE</p>
            <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
