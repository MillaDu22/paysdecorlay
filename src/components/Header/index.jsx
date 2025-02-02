import { useState, useEffect } from "react";
import PaysDeCorlay from "../../assets/images/logo-paysdecorlay.png";
import Triskel from "../../assets/images/triskel.webp";
import './header.css';

function Header() {
    const [bgOpacity, setBgOpacity] = useState(1);
    const [titleOpacity, setTitleOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Gère la transparence du header
            const opacity = Math.max(0, 1 - scrollY / 100);
            setBgOpacity(opacity);

            // Diminue l'opacité du titre progressivement
            const titleOpacityValue = Math.max(0, 1 - scrollY / 100);
            setTitleOpacity(titleOpacityValue);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <header className="body-header" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}>
            <span className="container-logo">
                <img className="logo-header" src={ PaysDeCorlay } alt="Logo du pays de Corlay" />
            </span>
            <span className="container-title1">
                <h1 className="title1" style={{ opacity: titleOpacity, transition: "opacity 0.3s ease-out" }}>Pays de Corlay</h1>
            </span>
            <span className="container-triskel">
                <img src = { Triskel } className="triskel" alt ="triskel" />
            </span>
        </header>
    )
}
export default Header;