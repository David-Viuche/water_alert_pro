import { useState } from 'react'
import { HeaderLink } from './HeaderLink'
import { AiOutlineCloseSquare } from 'react-icons/ai/index.js'
import { TfiMenuAlt } from 'react-icons/tfi/index.js'
import Link from 'next/link'

export const Header = () => {
  const [isOpen, setisOpen] = useState(false)

  function handleOnclick() {
    setisOpen(open => !open)
  }

  return (
    <header className='bg-white text-lg text-tremor-content-emphasis flex flex-col w-full h-auto sm:flex-row sm:justify-around sm:h-auto'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='sm:-m-0 font-bold'>
          <Link href='/' aria-label='redirección a la página principal' className='sm:hover:border-b-2 p-2'>AquaAviso</Link>
        </h2>
        <div onClick={handleOnclick} className='sm:hidden'>

          {
            (isOpen)
              ? <AiOutlineCloseSquare className='w-8 h-8' />
              : <TfiMenuAlt className='w-8 h-8' />
          }

        </div>

      </div>
      <nav className={`bg-white border sm:border-0 absolute p-5 top-14 inset-x-0 transition transform origin-top-right ${(!isOpen) && 'hidden'} sm:block opacity-95 sm:relative sm:top-0`}>
        <ul className='flex flex-col justify-center items-center gap-5 text-center w-full sm:flex-row sm:h-14'>
          <HeaderLink href='/' ariaLabel='redirección a la página principal'>Inicio</HeaderLink>
          <HeaderLink href='#faq' ariaLabel='redirección a la lista de entradas del blog'>Preguntas frecuentes</HeaderLink>
          <HeaderLink href='#cortes' ariaLabel='redirección a la lista de entradas del blog'>Ver cortes</HeaderLink>
        </ul>
      </nav>
    </header>
  )
}
