import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center space-y-6"
      >
        {/* Footer Heading */}
        <h2 className="text-3xl font-bold">Let’s Connect!</h2>
        <p className="text-gray-400 text-lg">
          I’m open to new opportunities and collaborations. Feel free to reach
          out!
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 text-2xl text-gray-400">
          <a
            href="https://github.com/sumee666"
            className="hover:text-purple-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sumeet-ardhi-2b6959251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-purple-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            className="hover:text-purple-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:sumeetardhi01@gmail.com"
            className="hover:text-purple-400 transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sumeet Ardhi. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
