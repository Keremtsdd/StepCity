import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function ScrollToTop() {
    const [isVisibility, setIsVisibility] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisibility(true)
            }
            else {
                setIsVisibility(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)

    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        isVisibility && (
            <motion.button
                onClick={scrollToTop}
                className="lg:h-14 lg:w-14 h-12 w-12  z-50 fixed bottom-7 right-7 rounded-full  shadow-lg bg-blue-600 text-white duration-300"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: isVisibility ? 1 : 0, scale: isVisibility ? 1 : 0.5 }}
                transition={{ duration: 1.2 }}
            >
                <KeyboardDoubleArrowUpIcon size={24} color='black' style={{ width: "30px", height: "30px" }} />
            </motion.button>
        )
    );
}

export default ScrollToTop