import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import StatsSection from "./components/StatsSection/StatsSection";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import BiharCreditCard from "./components/BiharCreditCard/BiharCreditCard";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FeaturedUniversities from "./components/FeaturedUniversities/FeaturedUniversities";
import PartnerUniversities from "./components/PartnerUniversities/PartnerUniversities";
import OnlineUniversities from "./components/OnlineUniversities/OnlineUniversities";
import StudyAbroad from "./components/StudyAbroad/StudyAbroad";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ExploreSection />
      <BiharCreditCard />
      <HowItWorks />
      <FeaturedUniversities />
      <PartnerUniversities />
      <OnlineUniversities />
      <StudyAbroad />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}


export default App;