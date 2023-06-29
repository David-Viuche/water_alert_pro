import { Card, Divider, Metric, Text } from '@tremor/react'

const Banner = () => {
  return (
    <section className='p-8 flex w-full items-center justify-between flex-col sm:flex-row mt-20 sm:mt-36 my-14'>
      <img src='/alert_ils.svg' alt='ilustracion persona con un celular y un mensaje de alerta' className='w-1/2 max-w-lg' />
      <div className='max-w-md text-center gap-8 flex flex-col'>
        <Metric>
          Cortes de agua en Bogotá
        </Metric>
        <Card>
          <ul className='text-justify'>
            {/* <li>
              <Text>
                Obtén alertas inmediatas sobre cortes de agua en tu zona.
              </Text>
              <Divider />
            </li> */}
            <li>
              <Text>
                Mantente al tanto de los cortes programados, emergencias y reparaciones, asegurando que nunca te sorprendas con la falta de agua.
              </Text>
              <Divider />
            </li>
            <li>
              <Text>
                Nuestra plataforma te brinda la tranquilidad de estar informado en todo momento.
              </Text>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

export default Banner
