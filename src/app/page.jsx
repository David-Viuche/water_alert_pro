'use client'
import Banner from '@/components/Banner'
import CutsFiltered from '@/components/CutsFiltered'
import DataChart from '@/components/DataChart'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Questions from '@/components/Questions'
import { formatDateUTC } from '@/utils/utils'
import { Text } from '@tremor/react'
import Script from 'next/script'
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
            date: formatDateUTC(el.date) || new Date(el.date)
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
    <main className='max-w-7xl min-h-screen mx-auto relative'>

      <Script id='my-script'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LQS1D6MNVX');
            `
        }}
      />
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-LQS1D6MNVX'></Script>
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
      <Questions />
      <Footer />
    </main>
  )
}
