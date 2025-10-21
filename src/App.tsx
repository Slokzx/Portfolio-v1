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
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <div className="w-full">
            <Summary />
          </div>
          <div className="w-full">
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
