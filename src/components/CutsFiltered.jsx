import { Button, Card, Metric, Select, SelectItem, Title } from '@tremor/react'
import CutList from './CutList'
import { filterArrayByKey, formatDate, getFirstAndLastDates, getUniqueKey } from '@/utils/utils'
import { useEffect, useState } from 'react'

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
    <CutList cuts={cutsFiltered} nodata={`No hay cortes de agua programados entre ${getDates?.firstDate} - ${getDates?.lastDate}`} >
      <Metric className='text-center'>
        {`Últimos cortes de agua publicados en Bogotá entre ${getDates?.firstDate} - ${getDates?.lastDate}`}
      </Metric>
      <Card>
        <div className='flex items-center justify-between mb-4'>
          <Title>
            Filtrar por localidad
          </Title>
          <Button size='xs' onClick={() => deleteFilters('location')}>Borrar</Button>
        </div>
        <Select value={selectedValue.location || null} onChange={(val) => filterHandle(val, 'location')}>

          {
            getUniqueKey(cuts, 'location').map((key) => (
              <SelectItem key={key} value={key}>{key}</SelectItem>
            ))
          }

        </Select>
        <div className='flex items-center justify-between my-4'>
          <Title>
            Filtrar por tipo trabajo
          </Title>
          <Button size='xs' onClick={() => deleteFilters('jobType')}>Borrar</Button>
        </div>
        <Select value={selectedValue.jobType || null} onChange={(val) => filterHandle(val, 'jobType')}>

          {
            getUniqueKey(cuts, 'jobType').map((key) => (
              <SelectItem key={key} value={key}>{key}</SelectItem>
            ))
          }

        </Select>
        <div className='flex items-center justify-between my-4'>
          <Title>
            Filtrar por día
          </Title>
          <Button size='xs' onClick={() => deleteFilters('date')}>Borrar</Button>
        </div>
        <Select value={selectedValue.date || null} onChange={(val) => filterHandle(val, 'date')}>
          {
            getUniqueKey(cuts, 'date').map((key) => (
              <SelectItem key={key} value={key}>{formatDate(new Date(key))}</SelectItem>
            ))
          }

        </Select>

      </Card>
    </CutList >
  )
}

export default CutsFiltered
