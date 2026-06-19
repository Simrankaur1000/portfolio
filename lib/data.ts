
export const profile = {
  name: 'Simran Kaur',

  role:
    'MSc Advanced Networking & Cyber Security',

  tagline:
    'Aspiring Cybersecurity Professional • VAPT • Digital Forensics • Networking • CTF Enthusiast',

  email:
    'simrankaur0101010@gmail.com',

  github:
    'https://github.com/simrankaur1000',

  linkedin:
    'https://www.linkedin.com/in/simran-kaur-915207212/',
}



export const navLinks = [
  {
    label: 'About',
    href: '#about',
  },

  {
    label: 'Skills',
    href: '#skills',
  },

  {
    label: 'Certifications',
    href: '#certifications',
  },

  {
    label: 'Projects',
    href: '#projects',
  },

  {
    label: 'CTF',
    href: '#ctf',
  },

  {
    label: 'Experience',
    href: '#experience',
  },

  {
    label: 'Contact',
    href: '#contact',
  },
]



export const education = [
  {
    period:
      '2024 — 2026',

    title:
      'MSc Advanced Networking & Cyber Security',

    org:
      'Brainware University, Kolkata',

    detail:
      'Focused on network security, vulnerability assessment, penetration testing and cyber defense.',
  },

  {
    period:
      '2020 — 2023',

    title:
      'Bachelor of Computer Applications (BCA)',

    org:
      'Jyotinivas Autonomous College, Kolkata',

    detail:
      'Built foundations in systems programming, networking and secure software development.',
  },
]



export const skillCategories = [
  {
    title: 'Offensive Security & VAPT',

    skills: [
      'Nmap',
      'Burp Suite',
      'OWASP Top 10',
      'Nikto',
      'Gobuster',
      'Dirsearch',
      'SQLMap',
      'Metasploit',
      'Hydra',
      'WPScan',
      'Subdomain Enumeration',
      'Web Application Testing',
    ],
  },

  {
    title: 'Networking & Infrastructure',

    skills: [
      'TCP/IP',
      'OSI Model',
      'Routing & Switching',
      'VLANs',
      'DNS',
      'DHCP',
      'VPN',
      'Firewall Configuration',
      'Network Troubleshooting',
    ],
  },

  {
    title: 'Digital Forensics & Incident Response',

    skills: [
      'Memory Forensics',
      'Disk Forensics',
      'Volatility',
      'Autopsy',
      'FTK Imager',
      'Evidence Acquisition',
      'Log Analysis',
      'Malware Investigation',
      'Incident Response',
      'Chain of Custody',
    ],
  },

  {
    title: 'CTF & Security Research',

    skills: [
      'Web Exploitation',
      'Reverse Engineering',
      'Cryptography',
      'OSINT',
      'Binary Analysis',
      'Privilege Escalation',
      'Write-up Documentation',
      'Challenge Solving',
    ],
  },
]


export type CertStatus =
  | 'Completed'
  | 'In Progress'
  | 'Planned'



export const certifications = [
  {
    name:
      'CRTOM',

    org:
      'Red Team Leaders',

    status:
      'Completed',

    blurb:
      'Certified Red Team Operations Management.',

    preview:
      '/certificates/crtom.png',

    download:
      '/certificates/crtom.pdf',
  },

  {
    name:
      'AZ-900',

    org:
      'Microsoft',

    status:
      'Completed',

    blurb:
      'Microsoft Azure Fundamentals.',

    preview:
      '/certificates/az900.png',

    download:
      '/certificates/az900.pdf',
  },

  {
    name:
      'Tata Cybersecurity Analyst Job Simulation',

    org:
      'Forage',

    status:
      'Completed',

    blurb:
      'Practical cybersecurity analyst simulation.',

    preview:
      '/certificates/tata.png',

    download:
      '/certificates/tata.pdf',
  },

  {
    name:
      'Python for Data Science',

    org:
      'saylor.org',

    status:
      'Completed',

    blurb:
      'CS250: Python for Data Science',

    preview:
      '/certificates/python.png',

    download:
      '/certificates/python.pdf',
  },
]



export const projects = [
  {
    title:
      'Network Reconnaissance & Enumeration Toolkit',

    desc:
      'Python toolkit integrating reconnaissance tools including Nmap, Nikto, WhatWeb, Netdiscover and ARP-scan.',

    tags: [
      'Python',
      'Nmap',
      'Kali Linux',
      'nikto',
      'whatweb',
      'netdiscover',
      'arp-scan',
      'ping',
      'traceroute',
      'nslookup',
      'dig',
      'nbtscan',
      'smb',
    ],

    featured:
      true,

    github:
      'https://github.com/simrankaur1000/simple-network-scanner-toolkit',

    demo:
      '',
  },

  {
    title:
      'Password Strength Analyzer',

    desc:
      'Web application that evaluates password strength and provides real-time recommendations.',

    tags: [
      'HTML',
      'Python',
      'Flask',
      'HIBP API',
    ],

    featured:
      true,

    github:
      'https://github.com/simrankaur1000/password-checker-web-app',

    demo:
      '',
  },

  {
    title:
      'CTF Challenge Writeups',

    desc:
      'Collection of challenge walkthroughs covering web exploitation, binary analysis and cryptography.',

    tags: [
      'CTF',
      'Writeups',
      'Web',
      'Digital Forensics',
      'Reverse Engineering',
      'Cryptography',
      'GeoOSINT',
      'OSINT',
      'Binary Exploitation',
      'Pwn',
    ],

    featured:
      false,

    github:
      'https://github.com/simrankaur1000/ctf-writeups',

    demo:
      '',
  },
]



export const ctf = {
  teamName:
    'Syntax Terror',

  role:
    'Core Team Member',

  description:
    'Participating in Capture The Flag competitions with focus on web exploitation, digital forensics, reverse engineering and offensive security.',

  ctftime:
    'https://ctftime.org/team/437085',

  focusAreas: [
    'Web Exploitation',
    'Digital Forensics',
    'Reverse Engineering',
    'Cryptography',
    'GeoOSINT',
    'OSINT',
    'Binary Exploitation',
    'Pwn',
  ],
}



export const experience = [
  {
    period:
      'Ongoing',

    role:
      'VAPT',

    org:
      'Brainware University',

    detail:
      'Working on web application security assessments, vulnerability identification, validation and reporting through academic labs and practical exercises.',
  },

  {
    period:
      'Ongoing',

    role:
      'CTF Team Member',

    org:
      'Syntax Terror',

    detail:
      'Participating in CTF competitions across web exploitation, forensics, cryptography and OSINT while contributing writeups and collaborative analysis.',
  },
]

