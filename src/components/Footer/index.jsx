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
            const breakpoint = window.innerWidth > 768 ? 50 : 4000;
            const opacity = Math.min(1, 1 - scrolledFromBottom / breakpoint);
            setBgOpacity(opacity);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <footer className="body-footer" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}>
            <div className="container-articles">
                <article className="article-footer a1">
                    <h2 className="title2"><i className="fa-solid fa-home"></i>Corlay</h2>
                    <p className="info-mairie"><i className="fa-solid fa-location-dot"></i>8 place de l'église</p>
                    <p className="info-mairie">22320 Corlay</p>
                    <p className="info-mairie"><i className="fa-solid fa-phone"></i>02 96 29 40 41</p>
                    <p className="info-mairie"><a className="a-info-mairie" href="mailto:accueil@mairiecorlay.fr"><i className="fa-solid fa-envelope"></i>Email</a></p>
                </article>
                <article className="article-footer a2">
                    <h2 className="title2"><i className="fa-solid fa-home"></i>Le Haut-Corlay</h2>
                    <p className="info-mairie"><i className="fa-solid fa-location-dot"></i>20 place du bourg</p>
                    <p className="info-mairie">22320 Le Haut-Corlay</p>
                    <p className="info-mairie"><i className="fa-solid fa-phone"></i>02 96 29 40 67</p>
                    <p className="info-mairie"><a className="a-info-mairie" href="mailto:lehautcorlay.mairie@wanadoo.fr"><i className="fa-solid fa-envelope"></i>Email</a></p>
                </article>
                <article className="article-footer a3">
                    <h2 className="title2"><i className="fa-solid fa-home"></i>Plussulien</h2>
                    <p className="info-mairie"><i className="fa-solid fa-location-dot"></i>23 rue du centre</p>
                    <p className="info-mairie">22320 Plussulien</p>
                    <p className="info-mairie"><i className="fa-solid fa-phone"></i>02 96 24 01 14</p>
                    <p className="info-mairie"><a className="a-info-mairie" href="mailto:mairie-de-plussulien@wanadoo.fr"><i className="fa-solid fa-envelope"></i>Email</a></p>
                </article>
                <article className="article-footer a4">
                    <h2 className="title2"><i className="fa-solid fa-home"></i>St-Martin-Des-Prés</h2>
                    <p className="info-mairie"><i className="fa-solid fa-location-dot"></i>1 place de l'église</p>
                    <p className="info-mairie">22320 St-Martin-Des-Prés</p>
                    <p className="info-mairie"><i className="fa-solid fa-phone"></i>02 96 32 42 75</p>
                    <p className="info-mairie"><a className="a-info-mairie" href="mailto:mairie.saintmartindespres@wanadoo.fr"><i className="fa-solid fa-envelope"></i>Email</a></p>
                </article>
                <article className="article-footer a5">
                    <h2 className="title2"><i className="fa-solid fa-home"></i>St-Mayeux</h2>
                    <p className="info-mairie"><i className="fa-solid fa-location-dot"></i>1 place de la mairie</p>
                    <p className="info-mairie">22320 St-Mayeux</p>
                    <p className="info-mairie"><i className="fa-solid fa-phone"></i>02 96 24 03 86</p>
                    <p className="info-mairie"><a className="a-info-mairie" href="mailto:stmayeux.mairie@orange.fr"><i className="fa-solid fa-envelope"></i>Email</a></p>
                </article>
            </div>
        </footer>
    )
}
export default Footer;