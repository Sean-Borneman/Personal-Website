import bctfbda from '../assets/blog/bctfBDA.png';
import githubarchive from '../assets/blog/GHarchive.png';
import GHBQ from '../assets/blog/GHBQ.png';
import sol1 from '../assets/blog/Correct_sol.png';
import step1 from '../assets/blog/Step1.png';
import step2 from '../assets/blog/Step2.png';
import alt1 from '../assets/blog/alt1.png';
import alt2 from '../assets/blog/alt2.png';
// Add your blog posts here
export const blogPosts = [
  // {
  //   id: 'why-i-built-this-website',
  //   title: 'Why I Built This Website',
  //   date: '2024-11-11',
  //   excerpt: 'My motivations and thoughts behind creating this quantum-themed portfolio website from scratch.',
  //   readTime: '2 min read',
  //   content: [
  //     {
  //       type: 'text',
  //       content: 'Building this website has been both a technical challenge and a creative journey. As someone deeply involved in quantum computing research, I wanted a platform that not only showcased my work but also reflected the aesthetic and philosophy of the field I\'m passionate about.'
  //     },
  //     {
  //       type: 'heading',
  //       content: 'The Inspiration'
  //     },
  //     {
  //       type: 'text',
  //       content: 'Quantum computing is inherently visual - from Bloch spheres representing qubit states to circuit diagrams mapping out algorithms. I wanted to bring that visual language into my personal website. The floating Bloch sphere animations in the background aren\'t just decoration; they represent the probabilistic, superposition-based nature of quantum systems.'
  //     },
  //     {
  //       type: 'text',
  //       content: 'Every time you refresh the page, the qubits display different quantum states - some near |0⟩, others in superposition, each with varying phases. This randomness mirrors the uncertainty and possibility space that makes quantum computing so fascinating.'
  //     },
  //     {
  //       type: 'heading',
  //       content: 'Why Build From Scratch?'
  //     },
  //     {
  //       type: 'text',
  //       content: 'I could have used a template or a website builder, but where\'s the learning in that? Building this site from the ground up gave me the opportunity to:'
  //     },
  //     {
  //       type: 'list',
  //       items: [
  //         'Practice modern React development with hooks and functional components',
  //         'Experiment with CSS animations and visual design',
  //         'Implement proper routing and state management',
  //         'Create a modular, scalable architecture for easy content updates',
  //         'Challenge myself to merge technical precision with aesthetic appeal'
  //       ]
  //     },
  //     {
  //       type: 'heading',
  //       content: 'The Technical Journey'
  //     },
  //     {
  //       type: 'text',
  //       content: 'I chose React with Vite for its fast build times and modern development experience. The component-based architecture makes it easy to maintain and extend. Each project card, each blog post, each animated qubit - they\'re all modular pieces that can be updated independently.'
  //     },
  //     {
  //       type: 'text',
  //       content: 'The quantum state calculations are a fun touch - using actual spherical coordinate mathematics to position state vectors on the Bloch sphere. It\'s these little details that make the site feel authentic to the quantum computing theme rather than just using quantum buzzwords for aesthetics.'
  //     },
  //     {
  //       type: 'heading',
  //       content: 'Looking Forward'
  //     },
  //     {
  //       type: 'text',
  //       content: 'This website is a living project. As I continue my research and work on new projects, this platform will grow with me. I plan to add more interactive elements, perhaps even a small quantum circuit simulator that visitors can play with.'
  //     },
  //     {
  //       type: 'text',
  //       content: 'But most importantly, this website represents my commitment to making quantum computing more accessible and visually engaging. If even one person sees this site and becomes curious about quantum algorithms, then I\'ve succeeded in my goal.'
  //     },
  //     {
  //       type: 'text',
  //       content: 'Thanks for visiting, and feel free to reach out if you want to discuss quantum computing, web development, or anything in between!'
  //     }
  //   ]
  // },
  {
    id: 'bctf 2025',
    title: 'Buckeye CTF 2025',
    date: '2025-11-12',
    excerpt: 'Writeups for some of the challenges I solved during a recent Capture the Flag Competition.',
    readTime: '3 min read',
    content: [
      {
        type: 'heading',
        content: 'Buckeye CTF 2025'
      },
      {
        type: 'text',
        content: 'For Some context, CTF stands for "Capture the Flag", CTF\'s are competitions where teams race to capture as many flags as possible. This may sound like a multiday survival sport, but it reality it mostly consists of hundereds of nerds bashing their heads against various computer security challenges. Once you hack the website, reverse engineer the binary, or solve the crypto puzzle, you get a "flag" - a secret string that you submit to earn points for your team.'
      },
      {
        type: 'heading',
        content: 'Big Data Analysis'
      },
      {
        type: 'image',
        src: bctfbda,
        alt: 'An image of the CTF challenge',
        caption: 'Big Data Analysis Challenge Screenshot'
      },
      {
        type: 'text',
        content: 'Big Data Analysis was a fun forensics challenge our team solved during the hackathon. The basic idea was to figure out how many github repositories were created in 2023. It sounds simple but there are 2 key challenges:'
      },
      {
        type: 'list',
        items: [
          '1. The data set is huge - several terabytes of raw JSON data representing github events over the year.',
          '2. The result needs to be an exact count, not an estimate. The downfall of many teams was having the right idea but implementing and extra filtering step, or redundancy check, threw off their final count.',
        ]
      },
      {
        type: 'text',
        content: 'This Challnege actually cuase quite a bit of controversy during the CTF becuase of how finiky the final answer was, and becuase some solutions required you to spend money. :'
      },
      {
        type: 'text',
        content: 'In this post, I\'ll go over my journey to solving Big Data Analysis with no monetary cost and a 5 line solution.'
      },
      {
        type: 'heading',
        content: 'How Do We Begin'
      }
      ,
      {
        type: 'text',
        content: 'The First thing we might try when asked "How many repositories were created in 2023?" is to treat it like an OSINT (Open Source Intelligence) challenge and just google it. The results are promising quite a few sites claim to have an answer but none are exact and all they really do is give us ballpark estimates of around 70,000,000. So we need to dig deeper. My first two thought were :"Does github have a public API?" and "WHo has aksed this question before?"'
      },
      {
        type: 'heading',
        content: 'THE OSINT APPROACH:'
      },
      {
        type: 'text',
        content: 'If we just google "how many githubs were made in 2023" we find a lot of unhelpful results (shown below). Most give us ballpark numbers like 70 million which are useful for telling us what ballpark number we ought to get but they don\'t get us any closer to the flag.'
      },
      {
        type: 'text',
        content: 'The first real progress we can make is by looking into "who has asked this question before" and the answer is of course GITHUB. And what do you know here\'s GitHub archive (https://www.gharchive.org/#bigquery)'
      },
      {
        type: 'image',
        src: githubarchive,
        alt: 'THe github Archive logo',
        caption: 'GitHub Archive'
      },
      {
        type: 'text',
        content: 'They even have an example on their website of how to use Googles Big Query to run SQL like commands on their database.'
      },
      {
        type: 'image',
        src: GHBQ,
        alt: 'Example of a big query command on the github archive website',
        caption: 'GitHub Archive Big Query Example'
      },
      {
        type: 'heading',
        content: 'Big Query to the Rescue'
      },
      {
        type: 'text',
        content: 'The main thing we want to do at this point is craft a command that we can run on Big Query that will look up how many repositories in the GitHub archive database were created in 2023.'
      },
      {
        type: 'text',
        content: 'The first thing we\'ll want to do is SELECT all the repositories FROM the github archive database which we can do with a command like this:'
      },
      {
        type: 'code',
        content: 'SELECT repo.name FROM `githubarchive.year.2023`'
      },
      {
        type: 'text',
        content: 'IF we actually run this command we\'d see "Response too large to return. Consider specifying a destination table in your job configuration. For more details, see https://cloud.google.com/bigquery/troubleshooting-errors". This is because we\'re trying to return every name of every 2023 repository.'
      },
      {
        type: 'text',
        content: 'So the first step in refining our command is to count how many repositories there are:'
      },
      {
        type: 'code',
        content: 'SELECT COUNT(repo.name) FROM `githubarchive.year.2023`'
      },
      {
        type: 'text',
        content: 'After running this we find there are 1,433,059,485 repository names in the 2023 github archive database. This is really interesting, but not exactly what we\'re looking for. Mainly, we need filter out repositories, created before 2023 and stop double counting repositories with the same name.'
      },
      {
        type: 'text',
        content: 'After reading Google\'s API a bit we\'ll find that the best way to do this is to read the \'type\' of the repositories we query from the database, and leverage the rather powerful DISTINCT keyword to automatically filter out duplicate repositories. The full query then looks like this:'
      },
      {
        type: 'code',
        content: 'SELECT \nCOUNT(DISTINCT repo.name) \nFROM `githubarchive.year.2023`\n WHERE type = \'CreateEvent\''
      },
      {
        type: 'text',
        content: 'And what we find is that there are 63,421,480 repositories in the 2023 database created in 2023. We can then wrap this number in the ctf-specific flag indicator and find "bctf{63421480}" as the flag!'
      },
      {
        type: 'text',
        content: 'Now while this solution does work, it\'s not what made the challenge hard, many people, both on my team and others attempted other solutions that in retrospect were over complicated. This is because the solution I\'ve outlined here counts forks, and branches on repositories as well as just repositories, this means that while our solution works it\'s incorrect depending on your interpretation of the problem. Here are some other queries we tried which each account for different edge cases and give different (incorrect) numbers.'
      },
      {
        type: 'code',
        content: 'SELECT COUNT(DISTINCT repo_name) AS unique_repos_2023\nFROM github.github_events\nWHERE event_type = \'CreateEvent\'\n  AND ref_type = \'repository\'\n  AND toYear(created_at) = 2023;'
      },
      {
        type: 'text',
        content: 'There was also a bit on controversy during the challenge because people thought the challenge was pay2win. Admittedly processing the data locally is unrealistic and BigQuery usually requires money, but a new account and a free trial is more than sufficient for what this challenge required.'
      }
    ]
  }
];
