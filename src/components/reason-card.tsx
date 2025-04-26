interface ReasonCardProps {
  index: number,
  title: string,
  explanation: string,
}

export default function ReasonCard({index, title, explanation}: ReasonCardProps) {
  return (
    <article className='flex flex-col min-[1024px]:flex-row gap-[10px]'>
      <img src={`/src/assets/icon-${index}.svg`} alt="Icon of the article" className='w-[40px] min-[1024px]:self-start' />

      <div className="min-[1024px]:w-[240px]">
        <h3 className='font-[700] text-[20px] leading-[150%]'>{title}</h3>
        <p className='font-[400] text-[16px] leading-[150%]'>{explanation}</p>
      </div>
    </article>
  )
}
