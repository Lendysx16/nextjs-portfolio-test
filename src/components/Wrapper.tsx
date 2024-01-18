"use client";
import { motion } from "framer-motion";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-12 py-4 flex-1"
        >
            {children}
        </motion.div>
    );
};

export default Wrapper;
