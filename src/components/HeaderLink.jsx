import Link from 'next/link'

export const HeaderLink = ({ children, href, target, ariaLabel, onClick }) => {
  return (
    <li onClick={onClick} className='w-6/12 rounded opacity-1  bg-slate-200 hover:bg-slate-400 sm:hover:bg-white sm:bg-white sm:hover:border-b-2 sm:w-auto flex justify-center'>
      <Link href={href} target={target} ariaLabel={ariaLabel} className='w-full h-full flex justify-center p-2'>
        {children}
      </Link>
    </li>
  )
}
