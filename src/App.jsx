import Header from "./sections/Header";
import Setapp from "./sections/Setapp";
import SetappInfo from "./sections/SetappInfo";
import TestimonialCard from "./sections/Testimonial";

export default function App() {
  return (
    <div className="bg-primary">
      <Header />
      <Setapp />
      <TestimonialCard/>
      <SetappInfo/>
    </div>
  );
}
