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
                className="h-12 w-12 z-50 fixed bottom-7 right-[220px] lg:right-7 border-2 rounded-full border-black shadow-lg hover:bg-black hover:text-white duration-300"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: isVisibility ? 1 : 0, scale: isVisibility ? 1 : 0.5 }}
                transition={{ duration: 1.2 }}
            >
                <KeyboardDoubleArrowUpIcon size={24} color='black' className='' style={{ width: "27px", height: "27px" }} />
            </motion.button>
        )
    );
}

export default ScrollToTop