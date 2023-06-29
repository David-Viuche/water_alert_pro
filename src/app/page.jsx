'use client'
import Banner from '@/components/Banner'
import CutsFiltered from '@/components/CutsFiltered'
import DataChart from '@/components/DataChart'
import { Header } from '@/components/Header'
import { Accordion, AccordionBody, AccordionHeader, AccordionList, Metric, Text } from '@tremor/react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [cuts, setCuts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/interruptions')
        const data = await response.json()
        if (!data.error) {
          setCuts(data.data.map(el => ({
            ...el,
            date: new Date(el.date)
          })))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className='max-w-7xl min-h-screen mx-auto '>
      <Header />
      <Banner />
      {isLoading && (
        <section className='p-8 flex w-full items-center justify-evenly flex-col gap-8'>
          <Text>Cargando datos...</Text>
        </section>
      )
      }
      {
        !isLoading && (
          <>
            {/* <CutsToday cuts={getTodayCuts(cuts)} /> */}
            <CutsFiltered cuts={cuts} />
            <DataChart cuts={cuts} />
          </>
        )
      }
      <section className='p-8 flex w-full items-center justify-evenly flex-col gap-8'>
        <Metric className='text-center'>
          Preguntas frecuentes
        </Metric>

        <AccordionList className='w-full gap-8 p-0 sm:p-8 grid sm:grid-cols-2'>
          <Accordion className='h-fit'>
            <AccordionHeader>¿De dónde salen los datos?</AccordionHeader>
            <AccordionBody>
              Actualmente, los datos provienen de la página  oficial del Acueducto de Bogotá en donde se encuentra esta información pública y se pueden consultar en cualquier momento en este link <a className='text-cyan-400 visited:text-cyan-600' target='_blank' href='https://www.acueducto.com.co/wps/portal/EAB2/Home/atencion-al-usuario/programacion_cortes'>https://www.acueducto.com.co/wps/portal/EAB2/Home/atencion-al-usuario/programacion_cortes</a>
            </AccordionBody>
          </Accordion>
          <Accordion className='h-fit'>
            <AccordionHeader>¿Son fiables los datos?</AccordionHeader>
            <AccordionBody>
              Los datos son obtenidos de la página oficial del Acueducto de Bogotá
            </AccordionBody>
          </Accordion>
          <Accordion className='h-fit'>
            <AccordionHeader>¿Cómo puedo apoyar este proyecto?</AccordionHeader>
            <AccordionBody>
              Compartiéndolo en las redes sociales. Ayúdanos a tener más visibilidad para que llegue a más personas
            </AccordionBody>
          </Accordion>
          <Accordion className='h-fit'>
            <AccordionHeader>¿Cada cuanto tiempo se actualiza la información?</AccordionHeader>
            <AccordionBody>
              Se mantendrá actualiza la información cada semana con las publicaciones oficiales del Acueducto de Bogotá
            </AccordionBody>
          </Accordion>
          <Accordion className='h-fit'>
            <AccordionHeader>¿Puedo usar los datos en mi página web?</AccordionHeader>
            <AccordionBody>
              Sí. Siempre y cuando nos cites como fuente. puedes utilziar este endpoint <a className='text-cyan-400 visited:text-cyan-600' href='/api/interruptions' target='_blank' rel='noopener noreferrer'>/api/interruptions</a>
            </AccordionBody>
          </Accordion>
          <Accordion className='h-fit'>
            <AccordionHeader>¿Es un proyecto oficial?</AccordionHeader>
            <AccordionBody>
              Este es un proyecto de código abierto con el fin de permitir filtrar y visualizar más fácilmente la información publicada por el Acueducto de Bogotá, no pretende reemplazar las publicaciones oficiales de cortes de agua
            </AccordionBody>
          </Accordion>
        </AccordionList>

      </section>
    </main>
  )
}
