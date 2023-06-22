import Link from 'next/link'

export const HeaderLink = ({ children, href, target, ariaLabel }) => {
  return (
    <li className='p-2 w-6/12 rounded opacity-1 bg-white hover:bg-slate-400 sm:hover:bg-white sm:bg-white sm:hover:border-b-2 sm:w-auto flex justify-center'>
      <Link href={href} target={target} aria-label={ariaLabel} className='w-full h-full flex justify-center'>
        {children}
      </Link>
    </li>
  )
}
