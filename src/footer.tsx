import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Comdosa 컴퓨터 도사들</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Providing reliable computer repair and technical support. 15 years of experience helping customers across California.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2025 Comdosa. All rights reserved.</p>
              </div>

              <div className="flex items-center space-x-6">
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Back to Top
                </button>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
