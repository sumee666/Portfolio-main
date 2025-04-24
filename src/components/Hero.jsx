import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaDownload, FaPaperPlane } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      name: 'React',
      color: 'bg-blue-500',
      x: [0, -30, 0],
      y: null,
      position: 'top-18 left-10',
    },
    {
      name: 'Node.js',
      color: 'bg-green-600',
      x: null,
      y: [0, -30, 0],
      position: 'bottom-10 right-12',
    },
    {
      name: 'MongoDB',
      color: 'bg-emerald-600',
      x: [0, 40, 0],
      y: null,
      position: 'top-24 right-24',
    },
    {
      name: 'Tailwind',
      color: 'bg-cyan-500',
      x: null,
      y: [0, 30, 0],
      position: 'top-40 left-32',
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-30 text-center md:text-left px-6 bg-gradient-to-br relative overflow-hidden w-full max-w-screen mx-auto"
    >
      {/* Floating Skill Bubbles */}
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className={`absolute ${skill.position} w-[110px] h-[110px] ${skill.color} text-white flex items-center justify-center text-sm md:text-base font-bold rounded-full shadow-lg opacity-90`}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: skill.x || 0,
            y: skill.y || 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'easeInOut',
          }}
        >
          {skill.name}
        </motion.div>
      ))}

      {/* Left: Text Content */}
      <div className="z-20 max-w-5xl space-y-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold leading-tight text-white transform transition-all hover:scale-110"
        >
          Hey, I'm <span className="text-purple-400">Sumeet Ardhi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          className="mt-4 text-xl text-purple-300 font-semibold"
        >
          <Typewriter
            words={[
              'Full Stack Developer',
              'Data Scientist',
              'Software Developer',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          className="mt-4 text-lg text-gray-300"
        >
          B.Tech Computer Science Engineering student at Lovely Professional University, specializing in Software Development. As a Software Developer, I focus on designing and building robust, scalable applications across platforms with a solid foundation in programming, algorithms, and system design. I work confidently with technologies like Java, Python, C++, SQL and enjoy developing software solutions that are both efficient and user-friendly. I'm passionate about continuous learning, clean code, and bringing ideas to life through technology. My goal is to contribute to innovative projects that drive meaningful change.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-lg shadow-2xl transform hover:scale-105 transition-all"
            >
              <FaPaperPlane />
              Contact Me
            </a>

            <a
              href="public/CV.pdf"
              download
              className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-xl text-lg shadow-2xl transform hover:scale-105 transition-all"
            >
              <FaDownload />
              Download My CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: 'easeOut' }}
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[4px] border-purple-400 shadow-2xl z-10 transform transition-all hover:scale-110"
      >
        <img
          src="/sumeet.jpg"
          alt="Sumeet"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Scroll-Triggered Message */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute bottom-10 w-full text-center"
      >
        <h3 className="text-white text-xl font-bold">
          Scroll down to see more
        </h3>
      </motion.div>
    </section>
  );
};

export default Hero;