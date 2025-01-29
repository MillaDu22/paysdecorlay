import { useState, useEffect } from "react";

import './footer.css';

function Footer() {
    const [bgOpacity, setBgOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrolledFromBottom = scrollHeight - (scrollY + windowHeight);
            
            // Augmente l'opacité à mesure qu'on arrive en bas (0 → 1)
            const opacity = Math.min(1, 1 - scrolledFromBottom / 50);
            setBgOpacity(opacity);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <footer className="body-footer" style={{ backgroundColor: `rgba(30, 90, 110, ${bgOpacity})` }}>
            <h2 className="title2">Footer Le pays de Corlay</h2>
        </footer>
    )
}
export default Footer;