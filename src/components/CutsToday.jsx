import { getTodayDate } from '@/utils/utils'
import { Metric, Title } from '@tremor/react'
import CutList from './CutList'

const CutsToday = ({ cuts }) => {
  return (
    <CutList cuts={cuts} nodata='No hay cortes de agua programados para hoy' >
      <Metric className='text-center'>
        Cortes de agua en Bogotá hoy
      </Metric>
      <Title>
        {getTodayDate()}
      </Title>
    </CutList>
  )
}

export default CutsToday
