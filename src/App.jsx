import Header from "../src/components/Header/index";
import Footer from "../src/components/Footer/index";
import './App.css'

function App() {

  return (
    <>
    <Header />
      <div className="body">
        <section className="section-nav">
          <nav className ="nav-page">
            <ul className= "nav-ul">
              <li className="nav-li"><a className ="nav-li-a" href="https://corlay.vercel.app" target="_blank" rel="noopener noreferrer" >Commune de Corlay</a></li>
              <li className="nav-li"><a className ="nav-li-a" href="https://corlay.vercel.app" target="_blank" rel="noopener noreferrer">Le Haut-Corlay</a></li>
              <li className="nav-li"><a className ="nav-li-a" href="https://corlay.vercel.app" target="_blank" rel="noopener noreferrer">Plussulien</a></li>
              <li className="nav-li"><a className ="nav-li-a" href="https://corlay.vercel.app" target="_blank" rel="noopener noreferrer">Saint-Mayeux</a></li>
              <li className="nav-li"><a className ="nav-li-a" href="https://corlay.vercel.app" target="_blank" rel="noopener noreferrer">Saint-Martin-Des-prés</a></li>
            </ul>
          </nav>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
