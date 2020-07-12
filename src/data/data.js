export const applications = [
  {
    name: 'whateverSynth',
    stack: 'JavaScript | React',
    description:
      'A in browser JavaScript/React based musical synthesizer that can be controlled using a computer keyboard, mouse, touch or a MIDI controller. Users can add effects chains in any order and share patches with other users.  Made with the Web Audio API. The app is responsive and can be used on any device that has a browser.  I created the global state provider that is used throughout the site, created basic synth playback, implemented MIDI input, and created the oscilloscope.',
    github: 'https://github.com/whateverSynth',
    site: 'https://whateversynth.netlify.app/',
    image1: 'assets/images/apps/whateversynth1.png',
    image2: 'assets/images/apps/whateversynth2.png',
  },
  {
    name: 'alcherithm',
    stack: 'JavaScript | React | Express | MongoDB | Node.js | QUnit',
    description:
      'Alcherithm is designed to be a JavaScript coding companion to help junior software developers learn and practice various code challenges. My team and I developed a learning platform that combines resources, videos and documentation to help developers build up a foundation in code. Users can code live in the browser and have that code checked against tests using QUnit. I wrote the user authentication for the front and back end and implemented a global state provider to share data to our various modular components, along with a lot of the design and conditional rendering in the app.',
    github: 'https://github.com/alcherithm',
    site: 'https://alcherithm.netlify.app/',
    image1: 'assets/images/apps/alcherithm1.png',
    image2: 'assets/images/apps/alcherithm2.png',
  },
  {
    name: 'fresh-track',
    stack:
      'React | Express | MongoDB | Node.js | Google Drive API | Dropbox API',
    description:
      'A simple file repository solution that allows artists to collate their latest music files stored on Google Drive, Bandcamp, Soundcloud and Dropbox into a single-location to share, listen and collaborate with others. I was largely the system architect for this project. Primarily coded the React front end with focus on state management, sourcing music from multiple APIs, creating a playlist, and displaying details of a playlist.  I also created the models for MongoDB on the backend',
    github: 'https://github.com/fresh-track',
    site: 'https://fresh-track.netlify.com',
    image1: 'assets/images/apps/freshtrack1.png',
    image2: 'assets/images/apps/freshtrack2.png',
    image3: 'assets/images/apps/freshtrack3.png',
  },
  {
    name: 'airSupply',
    stack: 'React | Express | PostgreSQL | Node.js | Google Maps API',
    description:
      'Rooted from popular shared spreadsheet amongst a community of artists, airSupply collects artist residencies and grants from around the world and makes them easily accessible by search parameters, Google Map marker, and residency / grant type. I championed this idea for this project to help it come to light and also setup the postgres database/general SQL search guidelines to help user navigation as well as designing and implementing our front end using React.',
    github: 'https://github.com/Artists-In-Residency',
    site: 'https://airsupply.netlify.app/',
    image1: 'assets/images/apps/airsupply1.png',
    image2: 'assets/images/apps/airsupply2.png',
    image3: 'assets/images/apps/airsupply3.png',
  },

  {
    name: 'covid-19-relief',
    stack: 'React | Express | PostgreSQL | Node.js',
    description:
      'A compilation of organizations seeking financial assistance to support their communities through COVID-19. The COVID-19 Aid Funds site is designed to help donors with a little extra income support groups or sectors likely to suffer significant financial consequences because of the COVID-19 pandemic and its necessary mitigation measures. This is a crowd-sourced list.  This site was created over a weekend with a small team of developers.  I was largely responsible for the backend and SQL database',
    github: 'https://github.com/covid-19-relief',
    site: 'https://www.covid19aidfunds.org/',
    image1: 'assets/images/apps/covid1.png',
    image2: 'assets/images/apps/covid2.png',
  },

  {
    name: 'music search',
    stack: 'JavaScript | React',
    description:
      'A proof of concept app that allows you to search for an artist, display their releases, select songs, and view lyrics.  This was written using class based components in React and hit multiple APIs to pull in information.',
    github: 'https://github.com/mikeymasonic/music-search-thing',
    site: 'https://music-search-thing.netlify.app/',
    image1: 'assets/images/apps/artistsearch1.png',
    image2: 'assets/images/apps/artistsearch2.png',
    image3: 'assets/images/apps/artistsearch3.png',
  },

  {
    name: 'chrysalSynth',
    stack: 'JavaScript | HTML | CSS',
    description:
      'Our first attempt at a browser-based musical instrument.  It can be controlled using a computer keyboard or a MIDI controller. Made with the Web Audio API and written completely in vanilla JavaScript. I championed the project and wrote basics to get the synth to function, implemented MIDI, created the oscilloscope, and wrote algorithms for some basic effects.  This app has been deprecated and improved exponentially by whateverSynth.',
    github: 'https://github.com/chrysalSynth',
    site: 'https://chrysalsynth.github.io/chrysalSynth',
    image1: 'assets/images/apps/chrysalsynth1.png',
    image2: 'assets/images/apps/chrysalsynth2.png',
  },
];

export const bio = {
  bio:
    'I am a human and software engineer with many passions closely related in technology and its relation to the human experience as conveyed through visual / sound installation art and well designed software applications. I have been in IT for the past decade operating a computer repair company called OMG Computer, supporting small businesses here in Portland.  In the last few years, I have worked on immersive digital, visual, and sound art installations at galleries and community spaces in the area.  I love to experiment with sensors, micro-controllers, multi-channel audio, and implement solid code to tie everything together.  This has really pushed my love and devotion of what tech can be and how it can make you feel all while trying to bridge the intersection of technology with other creative arts.',
};
