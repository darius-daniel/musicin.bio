export default function ShareMusic() {
  return (
    <section className='flex flex-col min-[1024px]:flex-row min-[1024px]:justify-between min-[1024px]:gap-0 gap-[110px] bg-accent-pink py-[120px] px-[24px] min-[580px]:px-[120px]'>
      <div className='flex flex-col gap-[36px] min-[1024px]:max-w-[400px] min-[1200px]:max-w-[604px] min-[1024px]:self-center'>
        <h2 className='text-secondary-orange font-[800] text-[36px] min-[1024px]:text-[46px] min-[1200px]:text-[56px] leading-[110%]'>
          Share your musicin.bio from your Instagram, TikTok, Twitter and other apps
        </h2>

        <p className='text-secondary-orange font-[400] text-[16px] min-[1200px]:text-[18px] leading-[169%]'>
          Have the freedom to share your link on all your social platforms and be rest assured we will handle the rest.
          Leave the audience to us and focus on creating beautiful music.
        </p>

        <a href="#" className='rounded-[4px] px-[40px] py-[12px] bg-secondary-orange text-white font-source-sans-pro-semibold text-[16px] leading-[25px] w-fit'>
          Sign up
        </a>
      </div>

      <div className="relative min-w-[337px] min-h-[431px] min-[1200px]:min-w-[557px] min-[1200px]:min-h-[712px] self-center">
        <div className="w-[216px] min-[1200px]:w-[356px] flex flex-col absolute top-0 left-0">
          <img
            src="/src/assets/icon__tiktok.png"
            alt="Tiktok Icon"
            className='w-[34px] min-[1200px]:w-[56px] translate-y-1/2 translate-x-[82px] min-[1200px]:translate-x-36 z-10'
          />

          <img
            src="/src/assets/socials__tiktok.png"
            alt="Social media picture"
            loading='lazy'
          />
        </div>


        <div className="w-[198px] min-[1200px]:w-[325px] flex flex-col absolute bottom-0 right-0">
          <img
            src="/src/assets/icon__instagram.png"
            alt="Instagram Icon"
            className='w-[34px] min-[1200px]:w-[56px] translate-y-1/2 translate-x-[82px] min-[1200px]:translate-x-36 z-10'
          />

          <img
            src="/src/assets/socials__instagram.png"
            alt="Social media picture"
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}