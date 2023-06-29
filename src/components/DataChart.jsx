import { getDistributionByDate, getDistributionByLocation, getDistributionByjobType, getDistributionBystartAndDuration } from '@/utils/utils'
import { AreaChart, BarChart, Card, Metric, Title } from '@tremor/react'

const DataChart = ({ cuts }) => {
  return (
    <section className='p-8 flex w-full items-center justify-evenly flex-col gap-8'>
      <Metric className='text-center'>
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
      <div className='flex flex-col sm:flex-row justify-between w-full gap-8'>
        <Card className='max-w-xl'>
          <Title>
            Cantidad cortes de agua por hora y duración
          </Title>
          <BarChart
            className='mt-6'
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
            className='mt-6'
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
            className='mt-6'
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
