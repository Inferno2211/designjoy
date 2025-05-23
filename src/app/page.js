import Hero from "./components/Hero";
import Hiw from "./components/Hiw";
import Services from "./components/Services";
import ServicesList from "./components/ServicesList";
import Pricing from "./components/Pricing";
import PricingDetails from "./components/PricingDetails";
import PricingCard from "./components/PricingCard";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Call from "./components/Call";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hiw />
      <Services />
      <ServicesList />
      <Pricing />
      <PricingDetails />
      <PricingCard />
      <Faq />

      <Footer />
    </main>
  );
}
