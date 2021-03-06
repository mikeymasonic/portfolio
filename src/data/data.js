export const applications = [
  {
    name: 'sonic blooming',
    stack: 'React | p5.js | Web Audio API | Google Drive API',
    description:
      'Sonic Blooming is a guided meditation on the sound of movement, growth, and transformation in our environments both external and internal. At the time of year when the roses in the the International Rose Test Garden are beginning to bloom, plants are generating more energy than usual. For this project fellow developer Jena Boehm and I were commissioned by my friend and fellow whateverSpace co-founder Crystal Cortez to create and design a website that visiters of the Portland International Test Garden can use to vibe with compositions created from various plants electrical impulse data read by sensors in a process called "Biodata Sonification".  Crystal has translated these impulses into musical pitches and sound that make up half of the composition you will hear. The other half of the composition is made up of field recordings she\'s collected in the space over time. Soundwalkers are encouraged to dive deep into these soundscapes as they explore each garden and they also can upload sounds they hear and upload it on our site to a shared folder via the Google Drive API.  These uploads will then be incorporated into new tracks over the course of the month.  There\'s also a cool audio visualizer on the page created with P5js and the Web Audio API.  This project was sponsored by ThirdAngleMusic and Portland Parks and Recreations',
    github: 'https://github.com/mikeymasonic/sonicBlooming',
    site: 'https://sonicblooming.com/',
    images: [
      'assets/images/apps/sonicblooming1.png',
      'assets/images/apps/sonicblooming2.png',
      'assets/images/apps/sonicblooming3.png',
      'assets/images/apps/sonicblooming4.png',
    ],
    youTubeVideos: 'aV4qci7fPFE',
  },
  {
    name: 'frqncy.live',
    stack: 'Vue.js | Nuxt | Apollo | PostgreSQL | GraphQL | TensorFlow | Sanity',
    description:
      'frqncy is a commercial web application that uses WebRTC to create virtual video chat rooms with friends to watch concerts together, buy merchandise and virtually interact with bands.  I developed a robust system that uses machine learning to detect claps and cheers that broadcasts the audio and sends data to be used by lighting and visual effects artists in venues.  I also worked on frontend and backend elements of the page to create a seamless web interface for audience participants along with day to day decision making to build the app from the ground up.',
    site: 'https://frqncy.live/',
    images: [
      'assets/images/apps/frqncy1.png',
      'assets/images/apps/frqncy2.png',
      'assets/images/apps/frqncy3.jpg',
      'assets/images/apps/frqncy4.png',
      'assets/images/apps/frqncy5.png',
    ],
  },
  {
    name: 'funding relief',
    stack: 'React | Express | PostgreSQL | Node.js | Cheerio Scraper',
    description:
      'Built after the wildfires on the west coast in 2020 happened, I was trying to think of ways to help out people using my web development knowledge. The idea I came up with is simple and builds on the platform GoFundMe has already built. I wanted to create a space that let\'s people browse all of the current wildfire funds on the West Coast to learn more about about individuals and communities in need. You can can see detailed information about each fund and when you\'re ready can go directly to that funds GoFundMe page to donate. What makes the site a bit different is that I wanted to ensure funds that are the furthest from reaching their goal make it to the top of the page. That\'s why when you will always those who still need the most relief at the top of the page.  The site scrapes GoFundMe twice a day and updates our database to reflect the latest information.  What\'s great about this project is it is reusable for any type of GoFundMe campaign by just inputting a URL on our backend.',
    github: 'https://github.com/fundingRelief',
    site: 'http://fundingrelief.netlify.app/',
    images: [
      'assets/images/apps/fundingrelief1.png',
      'assets/images/apps/fundingrelief2.png',
      'assets/images/apps/fundingrelief3.png',
    ],
  },
  {
    name: 'whateverSynth',
    stack: 'React | Web Audio API',
    description:
      'In browser JavaScript/React based musical synthesizer that can be controlled using a computer keyboard, mouse, touch or a MIDI controller. Users can add effects chains in any order and share patches with other users.  Made with the Web Audio API. The app is responsive and can be used on any device that has a browser.  I created the global state provider that is used throughout the site, created basic synth playback, implemented MIDI input, and created the oscilloscope.',
    github: 'https://github.com/whateverSynth',
    site: 'https://whateversynth.netlify.app/',
    images: [
      'assets/images/apps/whateversynth1.png',
      'assets/images/apps/whateversynth2.png',
    ],
  },
  {
    name: 'shapeways',
    stack: 'React | TensorFlow | Magenta | ml5 | Web Audio API',
    description:
      'Shapeways is a multimedia sandbox at the bleeding edge of art and technology. It\'s a real-time music and art generator that responds to your movements. It\'s an audiovisual composition shaped by the user, made possible by machine learning.',
    github: 'https://github.com/whateverSpace/shapeways-frontend',
    site: 'https://shapeways.netlify.app/',
    images: [
      'assets/images/apps/shapeways1.png',
      'assets/images/apps/shapeways2.png',
      'assets/images/apps/shapeways3.png',
    ],
    youTubeVideos: '5x5oFnMPvAQ',
  },
  {
    name: 'alcherithm',
    stack: 'React | Express | MongoDB | Node.js | QUnit',
    description:
      'Alcherithm is designed to be a JavaScript coding companion to help junior software developers learn and practice various code challenges. My team and I developed a learning platform that combines resources, videos and documentation to help developers build up a foundation in code. Users can code live in the browser and have that code checked against tests using QUnit. I wrote the user authentication for the front and back end and implemented a global state provider to share data to our various modular components, along with a lot of the design and conditional rendering in the app.',
    github: 'https://github.com/alcherithm',
    site: 'https://alcherithm.netlify.app/',
    images: [
      'assets/images/apps/alcherithm1.png',
      'assets/images/apps/alcherithm2.png',
    ],
  },
  {
    name: 'fresh-track',
    stack:
      'React | Express | MongoDB | Node.js | Google Drive API | Dropbox API',
    description:
      'A simple file repository solution that allows artists to collate their latest music files stored on Google Drive, Bandcamp, Soundcloud and Dropbox into a single-location to share, listen and collaborate with others. I was largely the system architect for this project. Primarily coded the React front end with focus on state management, sourcing music from multiple APIs, creating a playlist, and displaying details of a playlist.  I also created the models for MongoDB on the backend',
    github: 'https://github.com/fresh-track',
    site: 'https://fresh-track.netlify.com',
    images: [
      'assets/images/apps/freshtrack1.png',
      'assets/images/apps/freshtrack2.png',
      'assets/images/apps/freshtrack3.png',
    ],
  },
  {
    name: 'airSupply',
    stack: 'React | Express | PostgreSQL | Node.js | Google Maps API',
    description:
      'Rooted from popular shared spreadsheet amongst a community of artists, airSupply collects artist residencies and grants from around the world and makes them easily accessible by search parameters, Google Map marker, and residency / grant type. I championed this idea for this project to help it come to light and also setup the postgres database/general SQL search guidelines to help user navigation as well as designing and implementing our front end using React.',
    github: 'https://github.com/Artists-In-Residency',
    site: 'https://airsupply.netlify.app/',
    images: [
      'assets/images/apps/airsupply1.png',
      'assets/images/apps/airsupply2.png',
      'assets/images/apps/airsupply3.png',
    ],
  },

  {
    name: 'covid-19-relief',
    stack: 'React | Express | PostgreSQL | Node.js',
    description:
      'A compilation of organizations seeking financial assistance to support their communities through COVID-19. The COVID-19 Aid Funds site is designed to help donors with a little extra income support groups or sectors likely to suffer significant financial consequences because of the COVID-19 pandemic and its necessary mitigation measures. This is a crowd-sourced list.  This site was created over a weekend with a small team of developers.  I was largely responsible for the backend and SQL database',
    github: 'https://github.com/covid-19-relief',
    site: 'https://www.covid19aidfunds.org/',
    images: ['assets/images/apps/covid1.png', 'assets/images/apps/covid2.png'],
  },

  {
    name: 'music search',
    stack: 'React',
    description:
      'A proof of concept app that allows you to search for an artist, display their releases, select songs, and view lyrics.  This was written using class based components in React and hit multiple APIs to pull in information.',
    github: 'https://github.com/mikeymasonic/music-search-thing',
    site: 'https://music-search-thing.netlify.app/',
    images: [
      'assets/images/apps/artistsearch1.png',
      'assets/images/apps/artistsearch2.png',
      'assets/images/apps/artistsearch3.png',
    ],
  },

  {
    name: 'portfolio',
    stack: 'React',
    description:
      "This is the site you're on right now, how very meta.  I've been wanting to build a portfolio site for years to showcase all the things I'm involved in / projects I'm working on.  Now, here we are.  Built from scratch in React, a pretty straightforward build.  Used a JSON data file for all the content which made things a lot more organized and easy to update. Not surprisingly, most of the time and effort went into making the css play well on multiple devices.",
    github: 'https://github.com/mikeymasonic/portfolio',
    site: 'https://michaelromay.dev',
    images: [
      'assets/images/apps/portfolio1.png',
      'assets/images/apps/portfolio2.png',
      'assets/images/apps/portfolio3.png',
      'assets/images/apps/portfolio4.png',
    ],
  },

  {
    name: 'chrysalSynth',
    stack: 'JavaScript | HTML | CSS',
    description:
      'Our first attempt at a browser-based musical instrument.  It can be controlled using a computer keyboard or a MIDI controller. Made with the Web Audio API and written completely in vanilla JavaScript. I championed the project and wrote basics to get the synth to function, implemented MIDI, created the oscilloscope, and wrote algorithms for some basic effects.  This app has been deprecated and improved exponentially by whateverSynth.',
    github: 'https://github.com/chrysalSynth',
    site: 'https://chrysalsynth.github.io/chrysalSynth',
    images: [
      'assets/images/apps/chrysalsynth1.png',
      'assets/images/apps/chrysalsynth2.png',
    ],
  },
];

export const bio = {
  bio:
    'Human and software engineer with an interest in the use of technologies and their relation to the human experience as conveyed through visual / sound installations and thoughtfully designed software applications.   I create immersive digital, visual, and sound art and experiment with sensors, micro-controllers, multi-channel audio, and programing to bring everything together.  This pushes my interest what tech can be and how it can make you feel while bridging the intersection of technology and creative art.',
};

export const contact = {
  email: 'hi@michaelromay.dev',
  github: 'https://github.com/mikeymasonic',
  linkedIn: 'https://www.linkedin.com/in/michaelromay/',
  instagram: 'https://www.instagram.com/mikeymasonic/',
  whateverSpace: 'http://www.whateverSpace.org',
  whateverSpaceInsta: 'https://www.instagram.com/whateverSpacepdx',
  resume:
    'https://drive.google.com/file/d/1JwuOnUpG0ZA3M3gzbSNtNZPJe8l-MzMy/view?usp=sharing',
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
      'assets/images/installations/project0/17.jpg',
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
      'assets/images/installations/bodyImageLtd/1.jpg',
      'assets/images/installations/bodyImageLtd/2.jpg',
      'assets/images/installations/bodyImageLtd/3.jpg',
      'assets/images/installations/bodyImageLtd/4.jpg',
      'assets/images/installations/bodyImageLtd/5.jpg',
      'assets/images/installations/bodyImageLtd/6.jpg',
      'assets/images/installations/bodyImageLtd/7.jpg',
      'assets/images/installations/bodyImageLtd/8.jpg',
      'assets/images/installations/bodyImageLtd/9.jpg',
      'assets/images/installations/bodyImageLtd/10.jpg',
      'assets/images/installations/bodyImageLtd/11.jpg',
      'assets/images/installations/bodyImageLtd/12.jpg',
    ],
  },
  {
    name: 'theWave - conversations - 32.2 channel set',
    date: 'September 11th 2019',
    location: 'Disjecta - Portland, OR',
    description:
      "theWave was a showcase of artists who did a residency at PCC over the summer of 2019 where they worked directly with the Interactivity Department's multichannel speaker array Unity Gain.  I created a patch Max MSP and performed it live using a multi-slider midi controller, a hand built expression joystick, and various samples I collected over the years which included multiple conversations I had been apart of.  I titled the piece 'conversations'.  I used VBAP panners and split the conversations into various parts of the room so guests could walk around and listen in to conversations, but if they were in the middle of the room it would sound like a busy room.  I then integrated various multichannel delays, reverbs, and sample holds to give the guests a feeling of unease.  Some of the conversations were friendly and some of them were on dark subject matters such as finding a human body during search and rescue.  This was an incredibly rewarding experience that I am very thankful to have been a part of.",
    youTubeVideos: 'BA8iKDu39mA',
    github: 'https://github.com/mikeymasonic/theWave/',
    images: [
      'assets/images/installations/theWave/0.jpg',
      'assets/images/installations/theWave/1.jpg',
      'assets/images/installations/theWave/2.jpg',
      'assets/images/installations/theWave/3.jpg',
      'assets/images/installations/theWave/4.jpg',
      'assets/images/installations/theWave/5.jpg',
      'assets/images/installations/theWave/6.jpg',
      'assets/images/installations/theWave/7.jpg',
      'assets/images/installations/theWave/8.jpg',
      'assets/images/installations/theWave/9.jpg',
      'assets/images/installations/theWave/10.jpg',
      'assets/images/installations/theWave/11.jpg',
      'assets/images/installations/theWave/12.jpg',
    ],
  },
  {
    name: "he was once somebody's baby boy - quadraphonic set",
    date: 'July 13th 2019',
    location: 'S1 - Portland, OR',
    description:
      "this was a showcase of local BIPOC artists held at S1 in Portland, OR.  I created a composition called 'he used to be somebody's baby'. This title is inspired from a film titled 'the conversation' that was released in 1974.  This dialog has always stuck with me since first seeing the film years ago, I personally feel connected to it from my own experience growing up as 'somebody's baby boy' and being so far removed from that at this point in my life.  Here's a quote from the film: \"Oh, God. Every time I see one of those old guys...  I always think the same thing. What do you think?  I always think...that he was once somebody's baby boy.  Really, I do.  I think he was once somebody's baby boy...  and he had a mother and a father who loved him...  and now there he is...  half dead on a park bench...  and where are his mother or his father... all his uncles now?  Anyway, that's what I always think.\"  I used Max MSP outputting to four speakers in each corner of the room, lots of samples, a guitar rig with effects, a synth rig with effects, a roland SPDx, lots of DMX controlled lights, an accompanying video projections.  Everything was routed into an 8 channel interface, processed and sent back out to the two amplifiers I had setup and the 4 speakers in the room.  VBAP panners were used to put all the various instruments in different parts of the room.  I was able to manually set placements of things in three dimensions, alternatively I created a randomizer in my patch that could smoothly move around instruments/samples.  I setup a crossover to filter everything under 60hz to the 4 subwoofers they had on location and had a dedicated midi slider just for bass that I used as an instrument.  I was told that I was shaking the entire building and that you could physically feel the vibrations internally which I was really excited to hear.  This lead me down the path of making more music that you feel, not just hear.",
    // youTubeVideos: ['DwP0MY2JERw'],
    // youTubeVideos: 'DwP0MY2JERw',
    github: 'https://github.com/mikeymasonic/quadset/',
    images: [
      'assets/images/installations/quad/1.jpg',
      'assets/images/installations/quad/2.jpg',
      'assets/images/installations/quad/3.jpg',
      'assets/images/installations/quad/4.jpg',
      'assets/images/installations/quad/5.jpg',
      'assets/images/installations/quad/6.jpg',
      'assets/images/installations/quad/7.jpg',
    ],
  },
];

export const media = [
  // {
  //   bandName: 'disappointed friend',
  //   yearsActive: '2018-current',
  //   members:
  //     'michael romay(guitar, vocals), craig phillips(guitar)',
  //   description:
  //     'pretenser was a band created by myself any my homie craig.  we set out to create slow sad loud music in the vain of codeine and bedhead.  played some shows, recorded a couple of records (one is still unreleased).  Here is our first EP from around 2016',
  //   bandcamp: '4267872102', 
  //   youTubeVideos: 'RWYXh6USo8w',
  // },
  {
    bandName: 'pretenser',
    yearsActive: '2013-2018',
    members:
      'michael romay(guitar, vocals), craig phillips(guitar), derick mills(bass), patrick(drums)',
    description:
      'pretenser was a band created by myself any my homie craig.  we set out to create slow sad loud music in the vain of codeine and bedhead.  played some shows, recorded a couple of records (one is still unreleased).  Here is our first EP from around 2016',
    bandcamp: '4267872102',
    // youTubeVideos: ['nPYtQi6NPiU', 'eQ1i1vq3-O8'],
    // youTubeVideos: 'RWYXh6USo8w',
  },
  {
    bandName: 'no phone',
    yearsActive: '2011-2015',
    members:
      'matt stangel(guitar, vocals), michael romay(bass), dan schuman(synth), michael griffith(synth), booth willson(drums)',
    description:
      'no phone was a real weird band that played in ridiculous time signatures.  it was a passion project created by matt stangel.  played some shows locally and recorded this ep below.',
    bandcamp: '2926175440',
    // youTubeVideos: ['nPYtQi6NPiU', 'eQ1i1vq3-O8'],
  },
  {
    bandName: 'ocean age',
    yearsActive: '2009-2011',
    members:
      'yuri toplin(guitar, percussion, vocals), gavi detarr(guitar, vocals), jesse(guitar, vocals), chelsea(synths, vocals), tabbi(synth, vocals), michael romay(bass, vocals)',
    description:
      "ocean age was a band created by yuri and gavi.  I met yuri through work at the levis store in downtown portland.  this band was created at the height of 2009 when bands like Animal Collective and Fleet Foxes were popular (which I wasn't very stoked on, but I had just moved to portland and was looking for some humans to connect with.  we played a bunch of shows with some great bands over the years, like Nurses, Church, Say Hi, and more.  this was our one and only album we recorded",
    bandcamp: '4037375649',
    // youTubeVideos: ['nPYtQi6NPiU', 'eQ1i1vq3-O8'],
  },
  {
    bandName: 'am error',
    yearsActive: '2005-2011',
    members:
      'michael romay(bass, vocals), paul balazs(guitar, vocals), solomon lee(drums)',
    description:
      'am error was a band I started with some homies back in 2005 in toledo, oh.  we were influenced by bands like Drive Like Jehu, Lightening Bolt, Q and Not U, and Brainiac.  Played a bunch of shows, toured, recorded a couple of records.  Played some shows with some decent sized bands like Enon, Planes Mistaken For Stars, Agent Orange, Misfits, and meWithoutYou.  both paul and solomon were shredders, I miss playing with these dudes everyday.',
    bandcamp: '1413157771',
    youTubeVideos: ['eQ1i1vq3-O8', 'nPYtQi6NPiU'],
  },
];

export const recordedBands = [
  {
    releaseName: "on drugs - 'uchhole futah'",
    bandcamp: '1904368087',
  },
  {
    releaseName: "chain - 'cassie's chain'",
    bandcamp: '2358433489',
  },
  {
    releaseName: "loose - 'hair cut'",
    bandcamp: '3535544007',
  },
];
