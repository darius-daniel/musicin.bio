import './App.css'
import Header from "./components/header.tsx";

function App() {
  return (
    <>
      <Header />
      <section className="bg-primary-green flex flex-col gap-[10px] p-[24px] pt-[48px] min-[1200px]:p-[120px] min-h-lvh bg-[url(/src/assets/hero_background__mobile.png)] min-[1200px]:bg-[url(/src/assets/hero_background__desktop.png)] min-[1200px]:bg-contain bg-no-repeat bg-bottom min-[1200px]:bg-right">
        <div className="flex flex-col gap-[24px] max-w-[342px] min-[1200px]:max-w-[812px] text-white">
          <h1 className="text-[36px] min-[1200px]:text-[72px]  leading-[110%] font-extrabold text-white">
            Share your music with no borders, musicin.bio
          </h1>

          <p className="text-[16px] min-[1200px]:text-[24px] leading-[139%] font-light">
            Join 35M+ people using musicin.bio for their link in bio.
            One link to help you share everything you create,
            curate and sell from your Instagram, TikTok, Twitter,
            YouTube and other social media profiles.
          </p>

          <form action="" className="flex flex-col gap-[12px] min-[1200px]:flex-row">
            <input
              type="text"
              name="name"
              id="name"
              placeholder='musicin.bio/your name'
              className="min-[1200px]:w-[592px] py-[8px] px-[16px] rounded-[6px] border-white border-2 w-full placeholder:font-normal placeholder:text-[16px] placeholder:leading-[25px] focus:outline-0"
            />
            <button
                type="submit"
                className="min-[1200px]:w-fit font-semibold text-[16px] leading-[110%] w-full px-[32px] py-[16px] rounded-[4px] bg-white text-black"
            >
              Join musicin.bio
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default App
