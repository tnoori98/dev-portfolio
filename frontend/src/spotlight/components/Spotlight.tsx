import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { words } from "../data/words";

const Spotlight = () => {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const timeInterval = setInterval(()=> {
            setIndex(prev=>(prev+1) % words.length);
        }, 2000);
        return () => clearInterval(timeInterval);
    }, []);
    
    return(
         <section
            className="relative h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('/assets/spotlight-wide.png')" }}
        >
        <div className="z-10 mt-20 md:mt-20 text-center md:text-left rounded-3xl bg-clip-text">
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Hey, I'm Noori</h1>  
        <div className="h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={words[index]}
                  className="text-2xl md:text-4xl font-medium text-white drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[index]}
                </motion.p>
              </AnimatePresence>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Spotlight