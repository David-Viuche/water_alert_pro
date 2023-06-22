import { Divider, Grid, Text } from '@tremor/react'
import CutCard from './CutCard'

const CutList = ({ children, nodata, cuts }) => {
  return (
    <section className='p-8 flex w-full items-center justify-evenly flex-col gap-8'>
      <Divider></Divider>
      {children}
      {
        !cuts.length && <Text>
          {nodata}
        </Text>
      }
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className='gap-4 w-full'>
        {
          cuts && cuts.map((cut, index) => {
            return (
              <CutCard key={index} cut={cut} />
            )
          })
        }
      </Grid>
    </section>
  )
}

export default CutList
