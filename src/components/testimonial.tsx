import { Testimonial } from "../utils/definitions";

export default function TestimonialComponent({
  name,
  message,
  role,
  imageUrl,
}: Testimonial) {
  return (
    <article className="flex flex-col gap-[111px] text-white min-[540px]:min-w-[] min-[1024px]:max-w-[760px]">
      <p className="font-[700] text-[28px] min-[1024px]:text-[56px] leading-[110%] text-center">
        {message}
      </p>

      <div className="flex flex-col items-center gap-[24px]">
        <img
          src={imageUrl}
          alt="Image of the testimonial's author"
          className="w-[125px] h-[125px] rounded-full"
        />
        <div className="flex flex-col items-center">
          <p className="text-[18px] min-[1024px]:text-[24px] font-[600] leading-[169%]">
            {name}
          </p>
          <p className="font-[300] text-[16px] min-[1024px]:text-[18px] leading-[169%]">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}
