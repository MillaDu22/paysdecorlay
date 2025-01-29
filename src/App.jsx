
import Header from "../src/components/Header/index";
import Footer from "../src/components/Footer/index";
import LeHautCorlayLogo from "../src/assets/images/haut-corlay.webp";
import CorlayLogo from "../src/assets/images/blason-corlay.webp";
import PlussulienLogo from "../src/assets/images/plussulien.webp";
import StMayeuxLogo from "../src/assets/images/st-mayeux.webp";
import StMarttinDesPresLogo from "../src/assets/images/saint-martin-des-pres.webp";
import './App.css'

function App() {
  return (
        <>
        <div className="body-app">
          <Header />
          <div className="container-intro">
              <p className="intro-txt">
                Le Pays de Corlay, situé au cœur de la Bretagne, regroupe les communes de Corlay, Le Haut-Corlay, Saint-Mayeux, Saint-Martin-des-Prés et Plussulien. Ces localités, situées dans le département des Côtes-d'Armor, appartiennent par leurs traditions à la Basse-Bretagne et plus localement au territoire breton du pays Fañch.
              </p>
              <p className="intro-txt">
                Historiquement, ces communes faisaient partie de la Communauté de communes du Pays de Corlay, une structure intercommunale qui a existé jusqu'en 2013. En 2014, à la suite de la dissolution de cette communauté, ces communes ont rejoint d'autres intercommunalités, modifiant ainsi le paysage administratif local. 
              </p>
              <p className="intro-txt">
                Le canton de Corlay, une ancienne division administrative française, regroupait ces cinq communes jusqu'à sa disparition en 2015.
              </p>
              <p className="intro-txt">
                Le Pays de Corlay est reconnu pour son patrimoine historique et culturel, notamment le château de Corlay, témoin de l'histoire médiévale de la région.
              </p>
              <p className="intro-txt">
                Aujourd'hui, ces communes continuent de valoriser leur héritage tout en s'adaptant aux évolutions contemporaines, offrant un cadre de vie paisible et authentique au cœur de la Bretagne.
              </p>
            </div>
            <section className="section-nav">
              <nav className ="nav-page">
                <ul className= "nav-ul">
                  <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/profile.php?id=100063946335792" target="_blank" rel="noopener noreferrer" ><img className="logo" src= { CorlayLogo } alt="Logo de Corlay" />Corlay</a></li>
                  <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/commune.le.haut.corlay" target="_blank" rel="noopener noreferrer"><img className="logo" src= { LeHautCorlayLogo } alt="Logo du Haut-Corlay" />Le Haut-Corlay</a></li>
                  <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/groups/1033282263672708/" target="_blank" rel="noopener noreferrer"><img className="logo" src= { PlussulienLogo } alt="Logo de Plussulien" />Plussulien</a></li>
                  <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/profile.php?id=100080110360107" target="_blank" rel="noopener noreferrer"><img className="logo" src= { StMayeuxLogo } alt="Logo de Saint-Mayeux" />Saint-Mayeux</a></li>
                  <li className="nav-li"><a className ="nav-li-a" href="https://www.facebook.com/saint.martin.des.pres" target="_blank" rel="noopener noreferrer"><img className="logo" src= { StMarttinDesPresLogo } alt="Logo de Saint-Martin-Des-Prés" />Saint-Martin-Des-prés</a></li>
                </ul>
              </nav>
            </section>
            <Footer />
          </div>
        </>
    )
}
export default App;
