import { getDistributionByDate, getDistributionByLocation, getDistributionByjobType, getDistributionBystartAndDuration } from '@/utils/utils'
import { AreaChart, BarChart, Card, Metric, Title } from '@tremor/react'

const DataChart = ({ cuts }) => {
  return (
    <section className='p-8 flex w-full items-center justify-evenly flex-col gap-8 my-14'>
      <Metric className='text-center' id='estadisticas'>
        Gráficos de cortes de agua en Bogotá
      </Metric>
      <Card >
        <Title>
          Cantidad cortes de agua por localidad
        </Title>
        <AreaChart
          className='mt-6'
          data={getDistributionByLocation(cuts)}
          index='Localidad'
          categories={['Cantidad']}
          yAxisWidth={25}
          showLegend={false}
        />
      </Card>
      <div className='w-full gap-8 grid grid-cols-1 sm:grid-cols-3'>
        <Card className='max-w-xl'>
          <Title>
            Cantidad cortes de agua por hora y duración
          </Title>
          <BarChart
            className='mt-6 w-full'
            data={getDistributionBystartAndDuration(cuts)}
            index='Duracion'
            colors={['amber']}
            categories={['Cantidad']}
            yAxisWidth={25}
            showLegend={false}
          />
        </Card>
        <Card className='max-w-xl'>
          <Title>
            Cantidad cortes de agua por tipo trabajo
          </Title>
          <BarChart
            className='mt-6 w-full'
            data={getDistributionByjobType(cuts)}
            index='Tipo'
            categories={['Cantidad']}
            colors={['cyan']}
            yAxisWidth={25}
            showLegend={false}
          />
        </Card>
        <Card className='max-w-xl'>
          <Title>
            Cantidad cortes de agua por fecha
          </Title>
          <BarChart
            className='mt-6 w-full'
            data={getDistributionByDate(cuts)}
            index='Fecha'
            categories={['Cantidad']}
            colors={['purple']}
            yAxisWidth={25}
            showLegend={false}
          />
        </Card>
      </div>
    </section>
  )
}

export default DataChart
