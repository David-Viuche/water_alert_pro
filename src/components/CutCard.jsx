import { Card, Divider, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels, Text } from '@tremor/react'

const CutCard = ({ cut }) => {
  return (
    <Card>
      <Metric>{cut.location}</Metric>
      <Text>
        {`${cut.start} - ${cut.duration}`}
      </Text>
      <TabGroup>
        <TabList>
          <Tab>Barrios</Tab>
          <Tab>Direcciones</Tab>
          <Tab>Tipo trabajo</Tab>
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
          <TabPanel>
            <Text>{cut.jobType}</Text>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default CutCard
