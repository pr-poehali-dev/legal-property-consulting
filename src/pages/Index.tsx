import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Index() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", date: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050A14] font-golos">
      <Navbar
        navScrolled={navScrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        scrollTo={scrollTo}
      />
      <HeroSection
        scrollTo={scrollTo}
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
      <ContentSections scrollTo={scrollTo} />
    </div>
  );
}
