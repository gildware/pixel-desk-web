import CardSection from "@/src/components/landing/CardSection";
import Counter from "@/src/components/landing/Counter";
import FooterSection from "@/src/components/landing/FooterSection";
import Header from "@/src/components/landing/Header";
import Hero from "@/src/components/landing/Hero";
import IntegrationSection from "@/src/components/landing/IntegrationSection";
import Offcanvas from "@/src/components/landing/Offcanvas";
import Rated from "@/src/components/landing/Rated";
import Service from "@/src/components/landing/Service";
import Testimonials from "@/src/components/landing/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Offcanvas />
      <Hero />
      <Counter />
      <Service />
      <Rated />
      <CardSection />
      <Testimonials />
      <IntegrationSection />
      <FooterSection />
    </>
  );
}
