import ReasonCard from "./reason-card";

export default function WhyMusicin() {
  const reasons = [
    {
      index: 1,
      title: "Unique Link",
      explanation: "Get your own personalized and unique link.",
    },
    {
      index: 2,
      title: "Wider Reach",
      explanation: "Reach a wide range of audience from all over the world.",
    },
    {
      index: 3,
      title: "Customizable Themes",
      explanation:
        "Select from an infinite number of themes and customize them how you like.",
    },
    {
      index: 4,
      title: "Informative Analytics",
      explanation:
        "Our analytics management tool will help you make the best of your audience.",
    },
  ];

  return (
    <section className="min-[1024px]:relative min-[1024px]:top-[48px] bg-white py-[120px] px-[24px] min-[1024px]:px-[120px] flex flex-col min-[1200px]:flex-row items-center gap-[80px] min-[1024px]:gap-[145px] min-[580px]:px-[120px]">
      <img
        src="/src/assets/reggae-singer.png"
        alt="An image of an african male reggae singer, wearing a blue shirt and beanie in a recording studio"
        loading="lazy"
        className="max-w-[342px] min-[1024px]:max-w-[472px] self-center"
      />

      <div className="flex flex-col gap-[36px] min-[1024px]:self-center">
        <h2 className="font-[800] leading-[110%] text-[36px] min-[1024px]:text-[56px]">
          Why musicin.bio?
        </h2>

        <div className="grid grid-cols-1 min-[1024px]:grid-cols-2 min-[1024px]:gap-x-[48px] gap-[40px]">
          {reasons.map((reason, idx) => (
            <ReasonCard
              index={reason.index}
              title={reason.title}
              explanation={reason.explanation}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
