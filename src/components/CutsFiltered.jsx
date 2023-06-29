import { Card, Metric } from '@tremor/react'
import CutList from './CutList'
import { filterArrayByKey, getFirstAndLastDates } from '@/utils/utils'
import { useEffect, useState } from 'react'
import Filter from './Filter'

const CutsFiltered = ({ cuts }) => {
  const getDates = getFirstAndLastDates(cuts)
  const [cutsFiltered, setCutsFiltered] = useState(cuts)
  const [selectedValue, setSelectedValue] = useState({})

  const filterHandle = (val, key) => {
    setSelectedValue(sel => ({ ...sel, [key]: val }))
  }

  const deleteFilters = (key) => {
    if (key) {
      setSelectedValue(sel => {
        const newSelectedValue = { ...sel }
        delete newSelectedValue[key]
        return newSelectedValue
      })
    } else {
      setSelectedValue({})
    }
  }

  useEffect(() => {
    setCutsFiltered(filterArrayByKey(cuts, selectedValue))
  }, [cuts, selectedValue])

  return (
    <CutList cuts={cutsFiltered} nodata={`No hay cortes de agua programados entre ${getDates?.firstDate} - ${getDates?.lastDate} que cumplan los criterios de filtrado`} className='min-h-screen'>
      <Metric className='text-center' id='cortes'>
        {`Últimos cortes de agua publicados en Bogotá entre ${getDates?.firstDate} - ${getDates?.lastDate}`}
      </Metric>
      <Card className='flex flex-col sm:flex-row'>
        <Filter title='Filtrar por día' keyFilter='date' selectedValue={selectedValue} cuts={cuts} filterHandle={filterHandle} deleteFilters={deleteFilters} />
        <Filter title='Filtrar por localidad' keyFilter='location' selectedValue={selectedValue} cuts={cuts} filterHandle={filterHandle} deleteFilters={deleteFilters} />
        <Filter title='Filtrar por tipo trabajo' keyFilter='jobType' selectedValue={selectedValue} cuts={cuts} filterHandle={filterHandle} deleteFilters={deleteFilters} />
      </Card>
    </CutList >
  )
}

export default CutsFiltered
