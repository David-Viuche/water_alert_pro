'use client'
import Banner from '@/components/Banner'
import CutsFiltered from '@/components/CutsFiltered'
import CutsToday from '@/components/CutsToday'
import { Header } from '@/components/Header'
import { getTodayCuts } from '@/utils/utils'

import { useEffect, useState } from 'react'
export default function Home() {
  const [cuts, setCuts] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch('/api/interruptions')
        .then(res => res.json())
        .then(data => {
          if (!data.error) {
            setCuts(data.data.map(el => ({
              ...el,
              date: new Date(el.date)
            })))
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

    fetchData()
  }, [])

  return (
    <main className='max-w-7xl min-h-screen mx-auto '>
      <Header />
      <Banner />
      <CutsToday cuts={getTodayCuts(cuts)} />
      <CutsFiltered cuts={(cuts)} />
    </main>
  )
}
