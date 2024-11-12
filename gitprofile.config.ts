// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nasredinW', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['nasredinW/CloudFront_Signed_URL_generator_Python', 'nasredinW/OCR-Nvidia'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        
      ],
    },
  },
  seo: {
    title: 'Portfolio of Nassredin wesleti',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'nassredine-wesleti-837b85241',
    twitter: 'nasredine wesleti',
  
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'nasredinwesleti',
  
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'nasredinW.github.io',
    phone: '',
    email: 'Nasredinwesleti@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java/spring',
    'Angular',
    'lunix',
    'LLM Deployment',
    'CI/CD',
    'GCP',
    'Azure',
    'Node.js',
    'AWS ** ',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'gitlab',
    'python',
    'Terraform',
    'Ansible',
    'Kubernetes'
  ],
  experiences: [
    {
      company: 'DataBizz',
      position: 'Cloud DevOps Engineer ',
      from: 'Sep 2024 ',
      to: 'Present',
      companyLink: 'https://www.databiz.fr/',
    },
    {
      company: 'UBIAI',
      position: 'System&Cloud Engineer',
      from: 'Jun 2023',
      to: 'Sep 2024 ',
      companyLink: 'https://app.ubiai.tools',
    },
  ],
  certifications: [
    {
      name: 'AWS practitioner',
      body: 'This certification was earned through a collaboration between Orange Tunisie and AWS. The program lasted for 3 months and included over 200 lab exercises covering various AWS services, along with soft skills development and Linux administration training.',
      year: 'jun 2023',
      link: 'https://freecodecamp.org/certification/fcc4268ab8f-280c-4d52-907f-0ee5ab60f5f2/scientific-computing-with-python-v7',
    },
    {
      name: ' Terraform Associate',
      body: 'This certification was obtained through an in-depth training program focused on Infrastructure as Code (IaC) using Terraform. The program included hands-on labs and real-world use cases, covering key concepts like provisioning, managing, and automating cloud infrastructure with Terraform across multiple cloud providers. The course also included best practices for version control, collaboration, and deployment.',
      year: 'Issued Oct 2024',
      link: 'https://example.com',
    },
    {
      name: 'Scientific Computing with Python',
      body: 'This certification was earned through a comprehensive program focused on utilizing Python for scientific and computational applications. The course covered key topics such as numerical analysis, data visualization, statistical modeling, and solving complex mathematical problems using Python libraries like NumPy, SciPy, and Matplotlib. The training included hands-on projects that applied Python skills to real-world scenarios in research, engineering, and data science',
      year: 'octobre 202  3',
      link: 'https://freecodecamp.org/certification/fcc4268ab8f-280c-4d52-907f-0ee5ab60f5f2/scientific-computing-with-python-v7',
    },
    {
      name: 'M220J: MongoDB for Java Developers',
      body: 'Visualisation de données',
      year: 'octobre 20223',
      link: 'https://university.mongodb.com/course_completion/2797df06-3e83-450b-989b-880e2d86ee55?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing&fbclid=IwAR0RFIUULvMaXVCCNDMetK5LZbSsmdrt-yjJJWkV6xn-KeE49IvZZY0XXjs',
    },
  ],
  educations: [
    {
      institution: 'Institut Supérieur des Etudes Technologiques de Rades',
      degree: 'Licence ',
      from: '2023',
      to: '2019',
    },
    {
      institution: 'lycee Haffouz',
      degree: 'baccalauréat',
      from: '2018',
      to: '2017',
    },
  ],
  publications: [
    {
      title: 'Redis vs. RabbitMQ: High-Speed Data Store and Caching vs. Advanced Message Queuing',
      conferenceName: '',
      journalName: 'Redis vs. RabbitMQ',
      authors: 'Nassredine wesleti',
      link: 'https://medium.com/p/ac1a879c911a',
      description:
        'When it comes to building efficient and scalable applications, choosing the right tools for data storage, caching, and messaging is crucial. In this article, well compare Redis, a high-speed data store and caching solution, with RabbitMQ, an advanced message queuing system',
    },
   
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'Nasredinwesleti', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/nasredinW/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
