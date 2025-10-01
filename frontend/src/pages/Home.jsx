import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills"; // New import
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      {/* Removed introduction-profile-background div */}
      <Introduction />
      <Profile />
      {/* Removed WorkProcess, WorkTogether, Blog, Profession, HappyClients, Testimonial */}
      <Skills /> {/* New Skills component */}
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
