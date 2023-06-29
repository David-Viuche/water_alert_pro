import { Accordion, AccordionBody, AccordionHeader } from '@tremor/react'

const Details = ({ header, children }) => {
  return (
    <Accordion className='h-fit'>
      <AccordionHeader className='text-start'>{header}</AccordionHeader>
      <AccordionBody>
        {children}
      </AccordionBody>
    </Accordion>
  )
}

export default Details
