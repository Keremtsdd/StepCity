import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollPosition() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Sayfa değiştiğinde scroll pozisyonunu kaydedelim
        const handleScroll = () => {
            localStorage.setItem(`scroll-position-${pathname}`, window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        // Sayfa yüklendiğinde scroll pozisyonunu geri alalım
        const savedPosition = localStorage.getItem(`scroll-position-${pathname}`);
        if (savedPosition) {
            // Sayfa tamamen render edildikten sonra scroll pozisyonunu geri getir
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedPosition, 10));
            }, 100); // Biraz bekleyerek pozisyonu geri alıyoruz
        }
    }, [pathname]);

    return null;
}

export default ScrollPosition;
