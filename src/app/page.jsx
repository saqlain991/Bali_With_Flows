import Image from "next/image";
import Navbar from "./components/Navbar";
import NavMenu from "@/components/NavMenu";
import Hero from "./components/Hero";
import HeroComponent from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import YouMayAlsoLike from "./components/YouMayLike";
import TestimonialSection from "./components/Testimonial";
import AboutBanner from "./components/AboutBanner";

export default function Home() {

  const images = [
    {
      id: 1,
      title: "Umrah Special",
      desc: "Spiritual Journey",
      url: "/images/umrah.jpg",
      span: "md:col-span-2",
    },
    {
      id: 2,
      title: "European Escape",
      desc: "Discover Europe",
      url: "/images/europe.jpg",
      span: "",
    },
    // Add more images as needed
  ];

  return (
    <>
      <Navbar />
      <HeroComponent  />
      <ExperienceSection />
      <AboutBanner />
      <TestimonialSection />
      <YouMayAlsoLike />
      <Footer />
    </>
  );
}
