import { Button, Card, Metric, Select, SelectItem, Title } from '@tremor/react'
import CutList from './CutList'
import { filterArrayByKey, getFirstAndLastDates, getUniqueKey } from '@/utils/utils'
import { useState } from 'react'

const CutsFiltered = ({ cuts }) => {
  const getDates = getFirstAndLastDates(cuts)
  const [cutsFiltered, setCutsFiltered] = useState(cuts)
  const [selectedValue, setSelectedValue] = useState(null)

  const filterHandle = (val, key) => {
    setCutsFiltered(filterArrayByKey(cuts, key, val))
    setSelectedValue(val)
  }

  const deleteFilters = () => {
    setCutsFiltered(cuts)
    setSelectedValue(null)
  }

  return (
    <CutList cuts={cutsFiltered} nodata={`No hay cortes de agua programados entre ${getDates?.firstDate} - ${getDates?.lastDate}`} >
      <Metric className='text-center'>
        {`Cortes de agua en Bogotá entre ${getDates?.firstDate} - ${getDates?.lastDate}`}
      </Metric>
      <Card>
        <div className='flex items-center justify-between mb-4'>
          <Title>
            Filtrar por localidad
          </Title>
          <Button size='xs' onClick={deleteFilters}>Borrar</Button>
        </div>
        <Select value={selectedValue} onChange={(val) => filterHandle(val, 'location')}>

          {
            getUniqueKey(cuts, 'location').map((key) => (
              <SelectItem key={key} value={key}>{key}</SelectItem>
            ))
          }

        </Select>
      </Card>
    </CutList>
  )
}

export default CutsFiltered
