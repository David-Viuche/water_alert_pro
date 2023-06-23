import { Badge, Card, Divider, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels, Text } from '@tremor/react'

const CutCard = ({ cut }) => {
  return (
    <Card>
      <div >
        <div className='flex justify-between flex-col sm:flex-row'>
          <Metric>
            {cut.location}
          </Metric>
          <Text className='min-w-fit'>
            {`${cut.start} - ${cut.duration}`}
          </Text>
        </div>
        <Badge size='sm' className='h-fit my-4'>{cut.jobType}</Badge>
      </div>
      <TabGroup>
        <TabList>
          <Tab>Barrios</Tab>
          <Tab>Direcciones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>{cut.neighborhoods}</Text>
          </TabPanel>
          <TabPanel>
            {
              cut.addresses.map((add, index) => (
                <div key={index}>
                  {
                    (index !== 0) && <Divider />
                  }

                  <Text >
                    {add}
                  </Text>
                </div>
              ))
            }
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card >
  )
}

export default CutCard
