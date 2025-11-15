// Import images
import sspAlgorithm from '../assets/projects/SSP-algorithm.png';
import websiteImage from '../assets/projects/Website-picture.png';
import hexRay1 from '../assets/projects/HexRay1.png';
import hexRay2 from '../assets/projects/HexRay2.png';
// Add your projects here
export const projects = [
  {
    id: 'SSP-quantum-algorithm',
    title: 'SSP Quantum Algorithm',
    description: 'A quantum algorithm implementation for the Subset Sum Problem using quantum computing techniques.',
    shortDescription: 'Quantum algorithm for solving the Subset Sum Problem',
    image: sspAlgorithm,
    tags: ['Quantum Computing', 'Python', 'D-Wave'],
    githubUrl: null,
    liveUrl: null,
    paperUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10821198', // Add your paper URL here, e.g., 'https://arxiv.org/abs/1234.5678'
    date: '2024-11'
  },
  {
    id: 'HeXray',
    title: 'HeXray',
    description: 'A web-based decompilation and de-obfuscation program buitl on Ghidra and AI.',
    shortDescription: 'A web-based decompilation and de-obfuscation program buitl on Ghidra and AI.',
    image: hexRay1,
    tags: ['Ghidra', 'C', 'Antropic API', 'React'],
    githubUrl: 'https://github.com/Sean-Borneman/HexRay',
    liveUrl: null,
    paperUrl: null,
    date: '2025-09',
    detailedContent: [
      {
        type: 'text',
        content: 'HexRay, is a web-based decompilation and de-obfuscation tool built on top of Ghidra, enhanced with AI capabilities. It aims to simplify the reverse engineering process by providing an intuitive interface and leveraging machine learning models to assist in code analysis.'
      },
      {
        type: 'heading',
        content: 'Origins of the Project'
      },
      {
        type: 'text',
        content: 'HexRaw was started simply as a hackathon project. When I attended my first hackathon, I both didn\'t know how to make web-apps, and, it being the first few months of college, I certinly didnt know anoyone who could teach me. So when I walked into the large lecture hall I had two goals: Find a friend, get a free T-shirt. The latter goal was accomplihsed rather quickly, and after saying hi to the first three people I saw the former was as well.'
      },      {
        type: 'text',
        content: 'Together, our little group of 4 began to brainstorm. Turns out both me and James were passionate about cybersecurity, and as I was a new memeber to our schools CTF team I wanted to do something to prove Iwas at least a little bit capable. James was actually the one to make the suggestion, a tool that could use AI, to decompile binary files for you, thus bypassing the normally tedious process of decompiling, de-obfusctaing and usually re-writing code in order to understand it, thus HeXray was born.'
      },
      {
        type: 'heading',
        content: 'Approach and Implementation'
      },
      {
        type: 'text',
        content: 'HexRay is built on a React frontend with a python backend. The backend uses the Ghidra CLI to autmatically decompile uploaded binary files. Once the decompilation is complete, the code is sent to an AI model via the Antropic API, which is told to de-obfuscate and explain the code. The Results are then rendered back to the user.'
      },
      {
        type: 'image',
        src: hexRay1,
        alt: 'An Image of the HexRay UI',
        caption: 'Base IU interface of HeXray showing the upload process'
      },
      {
        type: 'text',
        content: 'A key chellenge we faced during development was ensuring the AI-generated, de-obfusctated code was accurate and wasnt just halluniations from the model. To address this, we spent several hours implementing a compiler (CMake) into the python backend. The idea was that after the AI generated the de-obfuscated code, we could compile it, and test its behavoir against the binary it order to definitivley tell if something had changed. \n We didn\'t fully finish this feature, during the hackathon we got as far as compiling the code, and returning sucesses (or Lack there of) to the frontend.  '
          },
      {
        type: 'image',
        src: hexRay2,
        alt: 'An Image of the HexRay UI',
        caption: 'Decomplilatioon results from HeXray'
      },
      {
        type: 'text',
        content: 'We were exteremely happy with how HexRay turned out, it was pretty, functional, and a blast to work on!'
      },
      {
        type: 'heading',
        content: 'Possible Future Improvements'
      },
      {
        type: 'list',
        items: [
          'Re-write the CMake checker to feed back into the AI for better de-obfuscation results',
          'Fix the Auto-Hack feature becuase occasionally the file is just empty',
          'Try to improve UX iwth a loading bar, the often several minute wait times were a bit rough',
          'Compare the Built CMake code to the original binary to ensure 1-to-1 behvaior (this is how the papers we read do it)'
        ]
      }
    ]
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
    date: '2024-03',
    
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
