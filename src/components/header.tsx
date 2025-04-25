export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-[16px] px-[24px] min-[1200px]:px-[120px] min-[1200px]:py-[24px] drop-shadow-md/8 relative">
      <img
        src="/src/assets/main%20logo.png"
        alt="Main logo for the website"
        className="w-[150px]"
      />
      <img
        src="/src/assets/hamburger-menu.png"
        alt="Hamburger menu icon for mobile devices"
        className='w-[21px] min-[1024px]:hidden absolute right-[24px]'
      />
      <nav>
        <ul className="max-[1024px]:hidden flex gap-[32px] font-medium text-[20px] leading-[100%]">
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
      </nav>
      <div className="max-[1024px]:hidden flex gap-[16px] font-bold text-[16px] leading-[25px] font-source-sans-pro-semibold">
        <a href="#" className="rounded-[4px] border-1 text-primary-green border-primary-green py-[16px] px-[32px]">Login</a>
        <a href="#" className="rounded-[4px] bg-primary-green text-white py-[16px] px-[32px]">Sign up</a>
      </div>
    </header>
  )
}