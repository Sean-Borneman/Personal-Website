// Import images
import sspAlgorithm from '../assets/projects/SSP-algorithm.png';
import websiteImage from '../assets/projects/Website-picture.png';

// Add your projects here
export const projects = [
  {
    id: 'SSP-quantum-algorithm',
    title: 'SSP Quantum Algorithm',
    description: 'A quantum algorithm implementation for the Subset Sum Problem using quantum computing techniques.',
    shortDescription: 'Quantum algorithm for solving the Subset Sum Problem',
    image: sspAlgorithm,
    tags: ['Quantum Computing', 'Python', 'D-Wave'],
    githubUrl: 'https://github.com/Sean-Borneman',
    liveUrl: null,
    paperUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10821198', // Add your paper URL here, e.g., 'https://arxiv.org/abs/1234.5678'
    date: '2024-11'
  },
  {
    id: 'quantum-simulator',
    title: 'Quantum Circuit Simulator',
    description: 'A web-based quantum circuit simulator built with React and quantum computing algorithms.',
    shortDescription: 'Interactive quantum circuit simulator for educational purposes',
    image: 'https://via.placeholder.com/400x250/646cff/ffffff?text=Quantum+Simulator',
    tags: ['React', 'Quantum Computing', 'JavaScript'],
    githubUrl: 'https://github.com/yourusername/quantum-simulator',
    liveUrl: 'https://quantum-simulator.example.com',
    paperUrl: null,
    date: '2024-01'
  },
  {
    id: 'ml-project',
    title: 'Machine Learning Dashboard',
    description: 'A comprehensive dashboard for visualizing machine learning model performance and training metrics in real-time.',
    shortDescription: 'Real-time ML model performance visualization',
    image: 'https://via.placeholder.com/400x250/535bf2/ffffff?text=ML+Dashboard',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    githubUrl: 'https://github.com/yourusername/ml-dashboard',
    liveUrl: null,
    paperUrl: null,
    date: '2024-03'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    description: 'A modern, quantum-themed portfolio website with animated background elements and responsive design.',
    shortDescription: 'Modern portfolio with quantum aesthetics',
    image: websiteImage,
    tags: ['React', 'Vite', 'CSS3'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    paperUrl: null,
    date: '2024-11',
    // Detailed content with sections - each section can have text, images, lists, etc.
    detailedContent: [
      {
        type: 'text',
        content: 'This portfolio website was built from the ground up to showcase my projects and skills in a visually engaging way. The design takes inspiration from quantum computing aesthetics with animated Bloch sphere diagrams floating in the background.'
      },
      {
        type: 'heading',
        content: 'Design Philosophy'
      },
      {
        type: 'text',
        content: 'The website follows a minimalist dark theme with vibrant blue accents. Every element was carefully crafted to ensure a smooth user experience while maintaining the quantum computing theme throughout.'
      },
      {
        type: 'image',
        src: 'https://via.placeholder.com/800x400/646cff/ffffff?text=Design+Mockup',
        alt: 'Design mockup of the portfolio',
        caption: 'Initial design mockup showing the quantum-themed interface'
      },
      {
        type: 'heading',
        content: 'Key Features'
      },
      {
        type: 'list',
        items: [
          'Animated quantum state visualizations using Bloch spheres',
          'Responsive design that works on all devices',
          'Dynamic project cards with hover effects',
          'Smooth page transitions using React Router',
          'Optimized performance with Vite build system'
        ]
      },
      {
        type: 'heading',
        content: 'Technical Implementation'
      },
      {
        type: 'text',
        content: 'The background animation system generates 15 unique qubits, each with randomly generated quantum states defined by theta (polar angle) and phi (azimuthal angle). These parameters are converted to 3D Cartesian coordinates to position the state vector on the Bloch sphere surface.'
      },
      {
        type: 'image',
        src: 'https://via.placeholder.com/800x400/535bf2/ffffff?text=Component+Architecture',
        alt: 'Component architecture diagram',
        caption: 'Component structure showing the modular architecture'
      },
      {
        type: 'text',
        content: 'The project card system is built with reusability in mind. Each project is defined in a central data file, making it easy to add new projects without touching the component code.'
      },
      {
        type: 'heading',
        content: 'Challenges & Solutions'
      },
      {
        type: 'text',
        content: 'One of the main challenges was ensuring the floating qubit animations didn\'t interfere with text readability. This was solved by implementing a z-index layering system where content boxes sit above the animated background with semi-transparent black backgrounds and glowing blue borders.'
      }
    ]
  }
];
