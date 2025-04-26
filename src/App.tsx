import "./App.css";
import FAQ from "./components/faq.tsx";
import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import Metrics from "./components/metrics.tsx";
import ShareMusic from "./components/share-music.tsx";
import TestimonialComponent from "./components/testimonial.tsx";
import WhyMusicin from "./components/why-musicin.tsx";
import { Testimonial } from "./utils/definitions.ts";

function App() {
  const testimonials: Array<Testimonial> = [
    {
      message:
        "“musicin.bio has helped me reach a global audience of 1m+ fans that love my music”",
      name: "Sean Chris",
      role: "Musician/Producer",
      imageUrl: "/src/assets/sean.png",
    },
  ];

  return (
    <>
      <Header />
      <Hero />

      <div className="relative">
        <WhyMusicin />
      </div>

      <ShareMusic />

      <Metrics />

      <section className="relative w-full flex flex-col items-center gap-[48px] py-[120px] px-[24px] bg-primary-green">
        <button className="absolute left-[24px] min-[1024px]:left-[120px] bottom-[320px]">
          <img
            src="/src/assets/arrow-left.svg"
            className="w-[32px] h-[32px] min-[1024px]:w-[48px] min-[1024px]:h-[48px]"
          />
        </button>

        <button className="absolute right-[24px] min-[1024px]:right-[120px] bottom-[320px]">
          <img
            src="/src/assets/arrow-right.svg"
            className="w-[32px] h-[32px] min-[1024px]:w-[48px] min-[1024px]:h-[48px]"
          />
        </button>

        <TestimonialComponent
          message={testimonials[0].message}
          name={testimonials[0].name}
          role={testimonials[0].role}
          imageUrl={testimonials[0].imageUrl}
        />
      </section>

      <FAQ />
    </>
  );
}

export default App;
