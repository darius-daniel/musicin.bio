export default function Metrics() {
  return (
    <section className="py-[120px] px-[24px] flex flex-col min-[1024px]:flex-row items-center gap-[111px] bg-secondary-orange min-[580px]:px-[120px]">
      <div className="flex gap-[10px] min-[1024px]:gap-[12px] w-[342px] min-[1024px]:w-[440px]">
        <div className="flex flex-col gap-[10px] min-[1024px]:gap-[12px]">
          <img
            src="/src/assets/data_visual-1.svg"
            alt=""
            className="w-[205px] min-[1024px]:w-[266px] -mt-4"
          />
          <div className="bg-primary-green rounded-[8px] w-[205px] min-[1024px]:w-[264px] min-[1024px]:h-[249px] p-[24px] flex flex-col gap-[4px] min-[1024px]:gap-[24px] items-center justify-center">
            <img
              src="/src/assets/reach.svg"
              alt=""
              className="w-[78px] min-[1024px]:w-[101px]"
            />
            <p className="text-white text-[10px] min-[1024px]:text-[14px] font-[400]">
              <span className="text-[34px] min-[1024px]:text-[44px] font-[700] leading-[126%]">
                115M+
              </span>{" "}
              <br /> people reached
            </p>
          </div>
        </div>
        <div className="w-[164px] bg-white text-primary-green flex flex-col items-center justify-center rounded-[8px]">
          <img src="/src/assets/engagement.svg" alt="" />
          <p className="text-[10px] min-[1024px]:text-[14px] text-center">
            <span className="text-[34px] min-[1024px]:text-[44px] font-[700] leading-[126%]">
              15M+
            </span>{" "}
            <br /> Engagement
          </p>
        </div>
      </div>

      <div className="text-white flex flex-col gap-[36px]">
        <h2 className="font-[800] text-[36px] min-[1024px]:text-[46px] min-[1200px]:text-[56px] leading-[110%]">
          Analyze your audience and keep your followers engaged
        </h2>

        <p className="font-[400] text-[16px] min-[1200px]:text-[18px] leading-[169%]">
          Have the freedom to share your link on all your social platforms and
          be rest assured we will handle the rest. Leave the audience to us and
          focus on creating beautiful music.
        </p>

        <a
          href="#"
          className="rounded-[4px] px-[40px] py-[12px] bg-white text-secondary-orange font-source-sans-pro-semibold text-[16px] leading-[25px] w-fit"
        >
          Sign up
        </a>
      </div>
    </section>
  );
}
