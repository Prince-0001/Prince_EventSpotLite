import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionWrapper = ({ children, location }) => {
    return (
        <AnimatePresence>
            <motion.div
                key={location.key}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }} 
                transition={{ duration: 0.5, ease: "easeInOut" }} 
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default MotionWrapper;