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
    'Human and software engineer with many passions rooted in technology and its relation to the human experience as conveyed through visual / sound installations and as well in thoughtfully designed software applications.   I create immersive digital, visual, and sound art which is displayed in various galleries and community spaces.  I experiment with sensors, micro-controllers, multi-channel audio, and implement code to tie everything together.  This pushes my love and devotion of what tech can be and how it can make you feel all while trying to bridge the intersection of technology with creative arts.',
};

export const contact = {
  email: 'hi@michaelromay.dev',
  github: 'https://github.com/mikeymasonic',
  linkedIn: 'https://www.linkedin.com/in/michaelromay/',
  instagram: 'https://www.instagram.com/mikeymasonic/',
  whateverSpace: 'http://www.whateverSpace.org',
  resume: 'assets/resume/michaelRomayResume.pdf',
};

export const installationsData = [
  {
    name: 'project0',
    date: 'June 9th, 10th 2018',
    location: 'Disjecta - Portland, OR',
    description:
      'project 0 involved melding together various technologies to achieve a unique user experience where users can interact with micocontrollers both inside and outside of the dome, which would then wirelessly transmit data back to a several computers to control 28 interior speakers within the dome and various projections around the dome using processing, max, mad mapper and unity gain.',
    youTubeVideos: 'DwP0MY2JERw',
    // youTubeVideos: ['DwP0MY2JERw', 'iZ8nN6hTnmM'],
    github: 'https://github.com/PCC-Interactivity-Lab',
    images: [
      'assets/images/installations/project0/1.jpg',
      'assets/images/installations/project0/2.jpg',
      'assets/images/installations/project0/3.jpg',
      'assets/images/installations/project0/4.jpg',
      'assets/images/installations/project0/5.jpg',
      'assets/images/installations/project0/6.jpg',
      'assets/images/installations/project0/7.jpg',
      'assets/images/installations/project0/8.jpg',
      'assets/images/installations/project0/9.jpg',
      'assets/images/installations/project0/10.jpg',
      'assets/images/installations/project0/11.jpg',
      'assets/images/installations/project0/12.jpg',
      'assets/images/installations/project0/13.jpg',
      'assets/images/installations/project0/14.jpg',
      'assets/images/installations/project0/15.jpg',
      'assets/images/installations/project0/16.jpg',
    ],
  },
  {
    name: 'Body-Image Ltd.',
    date: 'June 15th 2019',
    location: 'PICA - Portland, OR',
    description:
      "Body-Image Ltd. was an installation created by creative capstone students from PCC @ PICA june 15th 2019.  Lots of ideas were implemented and a lot of technology was used to pull the event off.  Some of this tech includes, Processing, MaxMSP, IR sensors, Kinects, Raspberry Pi Zeros, piezo mics, webcams, capacitive touch sensors, and Unity Gain - a 32 channel speaker array.  We had multiple stations setup. We wanted to create a sense of unease with technology that was presented in a casual, light setting.  It was blatantly obvious that you were being watched and everything you said was being recorded.  The featured station was multiple plastic bodies that we had acquired from an old tuxedo shop that had balloons attached to them with projectors mapped over the bodies and the balloons.  Guests could text message pictures and have them appear on the bodies.  We also had various bodies setup throughout the installation that had microphones embedded into them.  The microphones were connected to Raspberry Pi Zeros where they'd process the audio and then send the transcribed audio up to our balloon 'cloud'.  The station I created was something I called a motion portal.  It used webcams to track your movement and translate your movements into synthesizer tones that was then fed into a reverb algorithm.  Visual data was then taken and processed through a customized MaxMSP patch that was setup to add and remove visual effects at random creating a motion blur effect and various glitches and colors.",
    vimeoVideos: '343060247',
    // vimeoVideos: ['343060247', '333452395'],
    github: 'https://github.com/pcc-capstone-2019',
    images: [
      'assets/images/installations/project0/1.jpg',
      'assets/images/installations/project0/2.jpg',
      'assets/images/installations/project0/3.jpg',
      'assets/images/installations/project0/4.jpg',
      'assets/images/installations/project0/5.jpg',
      'assets/images/installations/project0/6.jpg',
      'assets/images/installations/project0/7.jpg',
      'assets/images/installations/project0/8.jpg',
      'assets/images/installations/project0/9.jpg',
      'assets/images/installations/project0/10.jpg',
      'assets/images/installations/project0/11.jpg',
      'assets/images/installations/project0/12.jpg',
      'assets/images/installations/project0/13.jpg',
      'assets/images/installations/project0/14.jpg',
      'assets/images/installations/project0/15.jpg',
      'assets/images/installations/project0/16.jpg',
    ],
  },
  {
    name: 'theWave - the conversation - 32.2 channel set',
    date: 'September 11th 2019',
    location: 'Disjecta - Portland, OR',
    description:
      "theWave was a showcase of artists who did a residency at PCC over the summer of 2019 where they worked directly with the Interactivity Department's multichannel speaker array Unity Gain.  I created a patch Max MSP and performed it live using a multi-slider midi controller, a hand built expression joystick, and various samples I collected over the years which included multiple conversations I had been apart of.  I titled the piece ' the conversation'.  I used VBAP panners and split the conversations into various parts of the room so guests could walk around and listen in to conversations, but if they were in the middle of the room it would sound like a busy room.  I then integrated various multichannel delays, reverbs, and sample holds to give the guests a feeling of unease.  Some of the conversations were friendly and some of them were on dark subject matters such as finding a human body during search and rescue.  This was an incredibly rewarding experience that I am very thankful to have been a part of.",
    // youTubeVideos: ['DwP0MY2JERw'],
    youTubeVideos: 'DwP0MY2JERw',
    github: 'https://github.com/mikeymasonic/theWave/',
    images: [
      'assets/images/installations/project0/1.jpg',
      'assets/images/installations/project0/2.jpg',
      'assets/images/installations/project0/3.jpg',
      'assets/images/installations/project0/4.jpg',
      'assets/images/installations/project0/5.jpg',
      'assets/images/installations/project0/6.jpg',
      'assets/images/installations/project0/7.jpg',
      'assets/images/installations/project0/8.jpg',
      'assets/images/installations/project0/9.jpg',
      'assets/images/installations/project0/10.jpg',
      'assets/images/installations/project0/11.jpg',
      'assets/images/installations/project0/12.jpg',
      'assets/images/installations/project0/13.jpg',
      'assets/images/installations/project0/14.jpg',
      'assets/images/installations/project0/15.jpg',
      'assets/images/installations/project0/16.jpg',
    ],
  },
  {
    name: "he was once somebody's baby boy - quadraphonic set",
    date: 'July 13th 2019',
    location: 'S1 - Portland, OR',
    description:
      "this was a showcase of local BIPOC artists held at S1 in Portland, OR.  I created a composition called 'he used to be somebody's baby'. This title is inspired from a film titled 'the conversation' that was released in 1974.  This dialog has always stuck with me since first seeing the film years ago, I personally feel connected to it from my own experience growing up as 'somebody's baby boy' and being so far removed from that at this point in my life.  Here's a quote from the film: <blockquote> Oh, God. Every time I see one of those old guys...  I always think the same thing. What do you think?  I always think...that he was once somebody's baby boy.  Really, I do.  I think he was once somebody's baby boy...  and he had a mother and a father who loved him...  and now there he is...  half dead on a park bench...  and where are his mother or his father... all his uncles now?  Anyway, that's what I always think.<blockquote>  I used Max MSP outputting to four speakers in each corner of the room, lots of samples, a guitar rig with effects, a synth rig with effects, a roland SPDx, lots of DMX controlled lights, an accompanying video projections.  Everything was routed into an 8 channel interface, processed and sent back out to the two amplifiers I had setup and the 4 speakers in the room.  VBAP panners were used to put all the various instruments in different parts of the room.  I was able to manually set placements of things in three dimensions, alternatively I created a randomizer in my patch that could smoothly move around instruments/samples.  I setup a crossover to filter everything under 60hz to the 4 subwoofers they had on location and had a dedicated midi slider just for bass that I used as an instrument.  I was told that I was shaking the entire building and that you could physically feel the vibrations internally which I was really excited to hear.  This lead me down the path of making more music that you feel, not just hear.",
    // youTubeVideos: ['DwP0MY2JERw'],
    youTubeVideos: 'DwP0MY2JERw',
    github: 'https://github.com/mikeymasonic/theWave/',
    images: [
      'assets/images/installations/project0/1.jpg',
      'assets/images/installations/project0/2.jpg',
      'assets/images/installations/project0/3.jpg',
      'assets/images/installations/project0/4.jpg',
      'assets/images/installations/project0/5.jpg',
      'assets/images/installations/project0/6.jpg',
      'assets/images/installations/project0/7.jpg',
      'assets/images/installations/project0/8.jpg',
      'assets/images/installations/project0/9.jpg',
      'assets/images/installations/project0/10.jpg',
      'assets/images/installations/project0/11.jpg',
      'assets/images/installations/project0/12.jpg',
      'assets/images/installations/project0/13.jpg',
      'assets/images/installations/project0/14.jpg',
      'assets/images/installations/project0/15.jpg',
      'assets/images/installations/project0/16.jpg',
    ],
  },
];
