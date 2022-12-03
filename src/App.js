import "./App.css";
import Articles from "./components/ArticleSection/Articles";
import Features from "./components/FeaturesSection/Features";
import Footer from "./components/Footer/Footer";
import Intro from "./components/IntroSection/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
