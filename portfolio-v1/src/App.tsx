import "./App.css";
import Cursor from "./components/Cursor";
import Contact from "./sections/Contact";
import EmailLink from "./sections/Email";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/NavBar";
import Skillset from "./sections/Skillset";
import SocialLinks from "./sections/SocialLinks";
import Summary from "./sections/Summary";
import Work from "./sections/Work";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Hero />
        <div className="mb-20 grid grid-cols-2 gap-4">
          <div className="cols-span-2">
            <Summary />
          </div>
          <div>
            <Work />
          </div>
        </div>
        <Skillset />
        <Contact />
      </main>
      <SocialLinks />
      <EmailLink />
      <Cursor />
      <Footer />
    </div>
  );
}

export default App;
