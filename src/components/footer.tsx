export default function Footer() {
  return (
    <footer className="px-[24px] py-[120px] min-[1200px]:pt-[55px] min-[1200px]:pb-[35px] min-[1200px]:px-[165px] bg-primary-dark-green text-white flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[127px] min-[1200px]:flex-row">
        <article className="flex flex-col gap-[18px] max-w-[342px]">
          <img
            src="/src/assets/footer_logo.png"
            alt="Footer Logo"
            className="w-[187px]"
          />

          <p className="font-[400] text-[14px] leading-[23px]">
            Getting your music to a wider audience, one link at a time.
            musicin.bio is the ultimate platform for musicians.
          </p>

          <a
            href="#"
            className="flex gap-[8px] text-[16px] leading-[110%] font-[500] border-b border-b-secondary-orange w-fit pb-[7px]"
          >
            Learn More
            <img
              src="/src/assets/arrow_long_right.svg"
              alt="Long arrow after the link text"
              className="w-[20px] h-[20px]"
            />
          </a>
        </article>

        <nav className="flex flex-col gap-[48px] min-[1200px]:flex-row">
          <ul className="text-[14px] leading-[23px] font-[400] text-gray/70 flex flex-col gap-[20px]">
            <li className="text-[18px] leading-[110%] font-[700] text-gray">
              musicin.bio
            </li>
            <li>
              <a href="#">Templates</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
          </ul>

          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[18px] font-[700] leading-[110%] ">
              Resources
            </h2>

            <div className="flex flex-col gap-[15px] text-[14px] leading-[23px] font-[400] text-gray/70">
              <a href="#">Our Blog</a>
              <a href="#">FAQs</a>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[18px] font-[700] leading-[110%] ">
              Follow Us On
            </h2>

            <div className="flex gap-[16px] text-[14px] leading-[23px] font-[400] text-gray/70">
              <a href="">
                <img
                  src="/src/assets/facebook_icon.svg"
                  alt="Facebook icon"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a href="">
                <img
                  src="/src/assets/linkedin_icon.svg"
                  alt="LinkedIn icon"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a href="">
                <img
                  src="/src/assets/twitter_icon.svg"
                  alt="Twitter icon"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <img
                src="/src/assets/instagram_icon_fill.svg"
                alt="Instagram icon"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </nav>
      </div>

      <div className="flex flex-col gap-[64px]">
        <hr className="border-gray/50 mb-[54px]" />
        <div className="text-gray/70 flex flex-col gap-[10px] min-[1200px]:flex-row min-[1200px]:justify-between">
          <p className="text-[14px] leading-[23px] font-[400]">
            Copyright © musicin.bio. All Rights Reserved
          </p>
          <div className="flex gap-[20px] text-[16px] leading-[110%] font-[500]">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
