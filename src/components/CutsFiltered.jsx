import { Metric } from '@tremor/react'
import CutList from './CutList'
import { getFirstAndLastDates } from '@/utils/utils'

const CutsFiltered = ({ cuts }) => {
  const getDates = getFirstAndLastDates(cuts)

  return (
    <CutList cuts={cuts} nodata='No hay cortes de agua programados para kk' >
      <Metric className='text-center'>
        {`Cortes de agua en Bogotá entre ${getDates?.firstDate} - ${getDates?.lastDate}`}
      </Metric>
    </CutList>
  )
}

export default CutsFiltered
