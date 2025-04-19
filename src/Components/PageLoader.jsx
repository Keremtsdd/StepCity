// src/Components/PageLoader.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false }); // sadece çizgi

const PageLoader = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        // Kısa bir gecikme sonrası durdur (animasyon gibi görünmesi için)
        const timeout = setTimeout(() => {
            NProgress.done();
        }, 500); // istersen süreyi ayarlayabilirsin

        return () => {
            clearTimeout(timeout);
        };
    }, [location.pathname]);

    return null; // Görsel bir şey dönmüyoruz
};

export default PageLoader;
