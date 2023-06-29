import { Text } from '@tremor/react'
import { AiOutlineGithub } from 'react-icons/ai/index.js'
const Footer = () => {
  return (
    <footer className='bg-white text-lg text-tremor-content-emphasis flex flex-col w-full h-auto sm:flex-row sm:justify-around items-center sm:h-auto p-16'>
      <Text>Desarrollado por StarksDev - 2023</Text>
      <a href='https://github.com/David-Viuche/water_alert_pro' target='_blank' ariaLabel='redirección al perfil de github' className='m-8'>
        <AiOutlineGithub className='h-8 w-8 hover:scale-125' />
      </a>
    </footer>
  )
}

export default Footer
