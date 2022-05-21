import type { NextPage } from 'next';
import { motion } from "framer-motion";

const Home: NextPage = () => {
	return (
    <>
      <div className='flex flex-1 min-h-screen justify-center items-center font-dotGothic text-7xl'>
        <div className='px-4'>
        工事中
        </div>
        <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity, repeatDelay: 1 }}
        
      >
        .
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        .
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        .
      </motion.span>
      </div>
      
    </>
	);
};

export default Home;
