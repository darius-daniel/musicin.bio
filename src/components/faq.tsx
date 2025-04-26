import FAQItem from "./faq-item";

export default function FAQ() {
  const answer = `Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.
A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.`;

  return (
    <section className="flex flex-col gap-[36px] items-center justify-center py-[120px] px-[24px] min-[1024px]:px-[120px] bg-accent-green">
      <h2 className="font-[700] text-[36px] min-[1024px]:text-[56px] leading-[110%]">Got Questions</h2>
      <dl className="w-full flex flex-col gap-[12px] leading-[120%]">
        <FAQItem question="Why do I need a link in bio tool?" answer={answer} />
      </dl>
    </section>
  );
}
