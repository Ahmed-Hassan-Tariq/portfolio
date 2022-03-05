
import NavBar from "./components/navbar/NavBar";
import Features from "./components/features/Features";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">

      <NavBar />     
      <Header />
      <Features/>
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
    

  
  );
}

export default App;
