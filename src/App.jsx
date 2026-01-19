import Footer from "./sections/Footer";
import Header from "./sections/Header";
import PricingCard from "./sections/Pricing";
import Setapp from "./sections/Setapp";
import SetappInfo from "./sections/SetappInfo";
import TestimonialCard from "./sections/Testimonial";

export default function App() {
  return (
    <div className="bg-primary">
      <Header />
      <Setapp />
      <TestimonialCard />
      <SetappInfo />
      <div className="w-full h-15 bg-[#fefefe]" />
      <PricingCard />
      <Footer/>
    </div>
  );
}
