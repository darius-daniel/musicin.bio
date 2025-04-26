import { useState } from "react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [showDescription, setShowDescription] = useState(false);
  const paragraphs = answer.split("\n");

  return (
    <div className="flex flex-col gap-[40px] rounded-[8px] p-[24px] bg-secondary-green">
      <dt className="font-[500] text-[20px] min-[1024px]:text-[24px]">
        <div className="flex flex-row justify-between items-center">
          {question}
          <img
            src={`/src/assets/${showDescription ? "minus" : "add"}.svg`}
            className="w-[24px] h-[24px] border border-secondary-green hover:border-primary-green"
            onClick={() => setShowDescription(!showDescription)}
          />
        </div>
      </dt>
      {showDescription && (
        <dd className="font-[400] text-[16px]">
          {paragraphs.map((paragraph, idx) => {
            return (
              <>
                <p key={idx + 1}>{paragraph}</p>
                {idx < paragraphs.length - 1 && <br />}
              </>
            );
          })}
        </dd>
      )}
    </div>
  );
}
