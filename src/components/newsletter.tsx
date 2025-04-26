export default function NewsLetter() {
  return (
    <section className="flex items-center justify-center px-[24px] py-[120px] bg-[url(/src/assets/mailing_list_background__mobile.png)] min-[800px]:bg-[url(/src/assets/mailing_list_background__desktop.png)] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-[36px] py-[60px] px-[24px] rounded-[8px] border border-accent-pink bg-white max-w-[342px] min-[1024px]:max-w-[760px] min-[1200px]:p-[120px] min-[1024px]:gap-[36px]">
        <h2 className="font-[700] text-[24px] min-[1024px]:text-[32px] leading-[110%]">
          Stay updated about our new tools and products, that will help you
          reach a wider audience.
        </h2>
        <form
          action=""
          method="post"
          className="flex flex-col min-[1024px]:flex-row justify-center min-[1024px]:justify-start min-[1024px]:items-center gap-[10px] relative"
        >
          <label htmlFor="mailing-list-email grow">
            <img
              src="/src/assets/mail.svg"
              alt="Mail icon"
              className="w-[24px] h-[24px] absolute top-[10px] min-[1024px]:top-[12px] left-[10px] z-20"
            />
            <input
              type="email"
              name="email"
              id="mailing-list-email"
              className="rounded-[6px] py-[8px] ps-[40px] pe-[16px] border-[0.5px] border-black focus:outline-0 placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[25px] placeholder:text-dark-gray z-10"
              placeholder="Enter your email address"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-primary-green min-[1024px]:w-fit font-[600] text-white text-[16px] leading-[110%] py-[16px] px-[32px] rounded-[4px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
