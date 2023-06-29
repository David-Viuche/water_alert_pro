import { AccordionList, Metric } from '@tremor/react'
import Details from './Details'

const Questions = () => {
  return (
    <section className='p-8 flex w-full items-center justify-evenly flex-col gap-8 my-14' id='faq'>
      <Metric className='text-center'>
        Preguntas frecuentes
      </Metric>

      <AccordionList className='w-full gap-8 p-0 sm:p-8 grid sm:grid-cols-2'>
        <Details header='¿De dónde salen los datos?'>
          Actualmente, los datos provienen de la página  oficial del Acueducto de Bogotá en donde se encuentra esta información pública y se pueden consultar en cualquier momento en este link <a className='text-cyan-400 visited:text-cyan-600' target='_blank' href='https://www.acueducto.com.co/wps/portal/EAB2/Home/atencion-al-usuario/programacion_cortes'>https://www.acueducto.com.co/wps/portal/EAB2/Home/atencion-al-usuario/programacion_cortes</a>
        </Details>
        <Details header='¿Son fiables los datos?'>
          Los datos son obtenidos de la página oficial del Acueducto de Bogotá
        </Details>
        <Details header='¿Cómo puedo apoyar este proyecto?'>
          Compartiéndolo en las redes sociales. Ayúdanos a tener más visibilidad para que llegue a más personas
        </Details>
        <Details header='¿Cada cuanto tiempo se actualiza la información?'>
          Se mantendrá actualiza la información cada semana con las publicaciones oficiales del Acueducto de Bogotá
        </Details>
        <Details header='¿Puedo usar los datos en mi página web?'>
          Sí. Siempre y cuando nos cites como fuente. puedes utilziar este endpoint <a className='text-cyan-400 visited:text-cyan-600' href='/api/interruptions' target='_blank' rel='noopener noreferrer'>/api/interruptions</a>
        </Details>
        <Details header='¿Es un proyecto oficial?'>
          Este es un proyecto de código abierto con el fin de permitir filtrar y visualizar más fácilmente la información publicada por el Acueducto de Bogotá, no pretende reemplazar las publicaciones oficiales de cortes de agua
        </Details>
      </AccordionList>

    </section>
  )
}

export default Questions
