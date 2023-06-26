import { formatDate, getUniqueKey } from '@/utils/utils'
import { Button, Select, SelectItem, Title } from '@tremor/react'

const Filter = ({ title, keyFilter, selectedValue, cuts, filterHandle, deleteFilters }) => {
  return (
    <div className='max-w-md w-full p-4'>
      <div className='flex items-center justify-between my-4'>
        <Title>
          {title}
        </Title>
        <Button size='xs' onClick={() => deleteFilters(keyFilter)}>Borrar</Button>
      </div>
      <Select value={selectedValue[keyFilter] || null} onChange={(val) => filterHandle(val, keyFilter)}>

        {
          getUniqueKey(cuts, keyFilter).map((key) => (
            <SelectItem key={key} value={key}>{
              (keyFilter === 'date') ? formatDate(new Date(key)) : key
            }</SelectItem>
          ))
        }

      </Select>
    </div>
  )
}

export default Filter
