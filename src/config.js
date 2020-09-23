module.exports = {
  siteTitle: 'Nivedita.M | Software Engineer',
  siteDescription:
    'Nivedita.M is a software engineer I am a software engineer based in Bangalore, India creating projects on python, java ,machine learning and whatever I can get my hands on. Currently looking for new opprtunities.',
  siteKeywords:
    'Nivedita.M, Nivedita, Java developer, software engineer, Machinelearning, web developer, javascript, Python developer',
  siteUrl: 'https://niveditamadhava.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-178515715-1',
 
  name: 'Nivedita.M',
  location: 'Bangalore, India',
  email: 'niveditamadhava1@gmail.com',
  github: 'https://github.com/Nivedita-del',
  
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Nivedita-del',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nivedita-m-2a4412179/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/nivedita-del',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nivedita_m_/',
    },  
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
