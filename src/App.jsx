
import Header from "../src/components/Header/index";
import Footer from "../src/components/Footer/index";
import LeHautCorlayLogo from "../src/assets/images/haut-corlay.webp";
import CorlayLogo from "../src/assets/images/blason-corlay.webp";
import PlussulienLogo from "../src/assets/images/plussulien.webp";
import StMayeuxLogo from "../src/assets/images/st-mayeux.webp";
import StMarttinDesPresLogo from "../src/assets/images/saint-martin-des-pres.webp";
import GlobeIcon from "../src/assets/images/globe.png";
import './App.css'

function App() {
  return (
        <>
          <div className="body-app">
            <Header />
            <div className="container-intro">
              <p className="intro-txt">
                Le Pays de Corlay, situé au cœur de la Bretagne, regroupe les communes de Corlay, Le Haut-Corlay, Saint-Mayeux, Saint-Martin-des-Prés et Plussulien. Ces localités, situées dans le département des Côtes-d'Armor, appartiennent par leurs traditions au centre-Bretagne et plus localement au territoire breton du pays Fañch.
              </p>
              <p className="intro-txt">
                Le Pays de Corlay est reconnu pour son patrimoine historique et culturel, notamment le château de Corlay, témoin de l'histoire médiévale de la région.
              </p>
              <p className="intro-txt">
                Aujourd'hui, ces communes continuent de valoriser leur héritage tout en s'adaptant aux évolutions contemporaines, offrant un cadre de vie paisible et authentique au cœur de la Bretagne.
              </p>
              <a className="facebook" href="https://www.facebook.com/Pays.de.corlay.22/" target="blank" aria-label="facebook" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
            <section className="section-nav">
              <h2 className="title2">Les sites web</h2>     
              <nav className ="nav-page">
                <ul className= "nav-ul">
                  <div className="container-social">
                    <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/profile.php?id=100063946335792" target="_blank" rel="noopener noreferrer" ><img className="logo" src= { CorlayLogo } alt="Logo de Corlay" /><img src= { GlobeIcon } className="globe-icon" alt="icone internet représentant un globe" />Corlay</a></li>
                    <a className="facebook" href="https://www.facebook.com/p/Commune-de-Corlay-100063946335792/?locale=fr_FR" target="blank" aria-label="facebook" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className="container-social">
                    <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/commune.le.haut.corlay" target="_blank" rel="noopener noreferrer"><img className="logo" src= { LeHautCorlayLogo } alt="Logo du Haut-Corlay" /><img src= { GlobeIcon } className="globe-icon" alt="icone internet représentant un globe" />Le Haut-Corlay</a></li>
                    <a className="facebook" href="https://www.facebook.com/commune.le.haut.corlay/?locale=fr_FR" target="blank" aria-label="facebook" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className="container-social">
                    <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/groups/1033282263672708/" target="_blank" rel="noopener noreferrer"><img className="logo" src= { PlussulienLogo } alt="Logo de Plussulien" /><img src= { GlobeIcon } className="globe-icon" alt="icone internet représentant un globe" />Plussulien</a></li>
                    <a className="facebook" href="https://www.facebook.com/groups/1033282263672708/" target="blank" aria-label="facebook" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className="container-social">
                    <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/saint.martin.des.pres" target="_blank" rel="noopener noreferrer"><img className="logo" src= { StMarttinDesPresLogo } alt="Logo de Saint-Martin-Des-Prés" /><img src= { GlobeIcon } className="globe-icon" alt="icone internet représentant un globe" />St-Martin-Des-prés</a></li>
                    <a className="facebook" href="https://www.facebook.com/saint.martin.des.pres/" target="blank" aria-label="facebook" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className="container-social">
                    <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/profile.php?id=100080110360107" target="_blank" rel="noopener noreferrer"><img className="logo" src= { StMayeuxLogo } alt="Logo de Saint-Mayeux" /><img src= { GlobeIcon } className="globe-icon" alt="icone internet représentant un globe" />St-Mayeux</a></li>
                    <a className="facebook" href="https://www.facebook.com/p/Commune-de-Saint-Mayeux-100080110360107/?locale=fr_FR" target="blank" aria-label="facebook" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </ul>
              </nav>
            </section>
            <Footer />
          </div>
        </>
    )
}
export default App;
