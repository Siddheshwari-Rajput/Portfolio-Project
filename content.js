/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Anything written like "[this]" is a PLACEHOLDER for you to replace.
 * Empty link strings ('') show a disabled "add link" button until you fill them in.
 */

export const profile = {
  name: 'Siddheshwari Rajput',
  fullName: 'Siddheshwari Jaydip Rajput',
  tagline: 'Building technology that keeps people safe, informed, and empowered.',
  role: 'B.Tech Computer Engineering student, R. C. Patel Institute of Technology, Shirpur',
  typewriterRoles: ['Problem Solver', 'AI Enthusiast', 'App Designer', 'Teacher of Tech'],
  email: 'rajputsiddeshwari@gmail.com',
  phone: '+91 9021130407', // remove this line (and its use in Contact) if you prefer not to show it publicly
  photo: 'photo.jpg', // file in /public
  resumeFile: 'Siddheshwari_CV.docx', // file in /public (swap for a PDF if you like)
  links: {
    github: 'https://github.com/siddheshwari', // from your CV; please verify this exact URL
    linkedin: '', // PLACEHOLDER: paste your LinkedIn profile URL
    codechef: '', // PLACEHOLDER: paste your CodeChef profile URL
  },
}

export const codechef = {
  rating: 1324,
  label: 'CodeChef DSA rating',
}

export const about = {
  paragraphs: [
    'Hello! I am Siddheshwari Jaydip Rajput, a Second Year B.Tech Computer Engineering student at R. C. Patel Institute of Technology, Shirpur.',
    "I am passionate about using technology to solve real-life problems, from women's safety to helping farmers earn fairly. I enjoy learning Python, exploring Artificial Intelligence, and designing app ideas that make a difference.",
    'I also like to explain technology in simple language, and I have conducted an AI awareness session for school students in English and Marathi. I believe good engineering starts with understanding people\u2019s problems first.',
  ],
  goal: 'To become a software engineer who builds socially meaningful and AI-powered solutions.',
  facts: [
    { label: 'Studying', value: 'B.Tech Computer Engineering, 2025\u20132029' },
    { label: 'Languages', value: 'English and Marathi' },
    { label: 'Looking for', value: 'Internships and entry-level roles' },
  ],
}

export const skillGroups = [
  { title: 'Programming', items: ['Java', 'C', 'Python (basics)', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Computer science', items: ['Data Structures', 'OOP', 'SQL and DBMS'] },
  { title: 'Tools', items: ['Git and GitHub', 'Google Colab', 'n8n workflows'] },
  { title: 'Design', items: ['App / UI design', 'PowerPoint design'] },
  {
    title: 'Soft skills',
    items: ['Problem solving', 'Teamwork', 'Communication', 'Quick learning', 'Leadership', 'Public speaking', 'Technical writing', 'Research'],
  },
]

/**
 * Projects. Fields:
 *  github / demo : '' => disabled "add link" button
 *  tags          : technologies. Items in [brackets] are shown as placeholders
 *  flow          : optional before/after diagram
 *  sosDemo       : true => shows the interactive SOS concept demo
 */
export const projects = [
  {
    id: 'safe-signal',
    featured: true,
    title: 'Safe Signal: Personal Safety SOS App',
    kind: 'Semester Project-I, team of 4, guide Mrs. P. R. Patil, 2026\u201327',
    summary:
      "People in an emergency often can't call or message in time. Safe Signal sends a one-tap SOS alert with live location to trusted contacts.",
    points: [
      'One-tap SOS and live location sharing',
      'Simple, stress-friendly interface',
      'Frontend and backend design',
      'Future scope: voice-activated SOS, helpline integration, offline alerts',
    ],
    role: '[your role in the team]',
    tags: ['[tech used]'],
    sosDemo: true,
    github: '',
    demo: '',
  },
  {
    id: 'agritech',
    title: 'AgriTech Solution',
    kind: 'AITHON 2.0 Hackathon, Team Arjuna',
    summary:
      "Too many intermediaries reduce farmers' earnings and raise consumer prices. Our idea is a software platform that connects farmers directly with buyers.",
    points: [
      'I surveyed farmers in Shirpur to understand the problem',
      'I helped build and present the solution deck',
    ],
    flow: {
      before: ['Farmer', 'Many intermediaries', 'Consumer'],
      after: ['Farmer', 'Our platform', 'Consumer'],
    },
    tags: ['Problem research', 'Pitch deck'],
    github: '',
    demo: '',
  },
  {
    id: 'farmlink',
    title: 'FarmLink: Digital Agricultural Marketplace',
    kind: 'Proposal',
    summary:
      'A proposed platform connecting farmers directly with verified dealers and bulk buyers, with transparent pricing and order management.',
    points: [],
    tags: ['[tech used]'],
    github: '',
    demo: '',
  },
  {
    id: 'resume-analyzer',
    title: 'AI Resume Analyzer',
    kind: 'Concept',
    summary:
      'A concept for analysing resumes and giving an ATS score, skill gaps, and improvement suggestions.',
    points: ['Uses n8n and AI/LLM-based workflow concepts'],
    tags: ['n8n', 'LLM workflows'],
    github: '',
    demo: '',
  },
  {
    id: 'library-system',
    title: 'Java Library Management System',
    kind: 'Basic Java project',
    summary: 'A basic management system built in Java.',
    points: ['Applies OOP concepts: classes, objects, and methods'],
    tags: ['Java', 'OOP'],
    github: '',
    demo: '',
  },
  {
    id: 'qr-attendance',
    title: 'QR Code Based Smart Attendance System',
    kind: 'Design',
    summary: 'A QR-based approach to recording attendance and reducing manual work.',
    points: [],
    tags: ['[tech used]'],
    github: '',
    demo: '',
  },
  {
    id: 'python-journals',
    title: 'Python Practical Journals',
    kind: 'Coursework',
    summary: 'Practical journals covering classes, objects, and constructors in Python.',
    points: [],
    tags: ['Python', 'OOP'],
    github: '',
    demo: '',
  },
]

export const resume = {
  objective:
    'Computer Engineering student with a strong interest in software development and problem solving. Looking to improve technical skills through practical projects and opportunities in the IT industry.',
  education: [
    {
      title: 'B.Tech, Computer Engineering',
      place: 'R. C. Patel Institute of Technology, Shirpur',
      period: '2025\u20132029',
    },
  ],
  activities: [
    {
      title: 'AI awareness session for school students (7th\u20138th Std)',
      text: 'A 30-minute session in English and Marathi on AI safety, misinformation, privacy, the "PAUSE" habit before trusting online content, and golden rules for safe AI use, using real examples like the Ghibli-style photo trend.',
    },
    { title: 'AITHON 2.0 participant', text: 'Hackathon participant with Team Arjuna.' },
    { title: 'UHV presentation', text: '"Understanding Prosperity".' },
    { title: 'Maths case study', text: '"Insights from the Data".' },
    { title: 'Certificates', text: '[add your certificates here]' },
  ],
}

export const vision =
  'I want to create technology that is not only smart, but also safe, simple, and useful for every person, in cities and in villages.'
