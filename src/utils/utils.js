export const getTodayCuts = (data) => {
  const today = new Date().setHours(0, 0, 0, 0)

  const filteredData = data.filter(obj => {
    const objDate = new Date(obj.date).setHours(0, 0, 0, 0)
    return objDate === today
  })

  const res = sortCuts(filteredData)

  return res
}

export const sortCuts = (data) => {
  const res = data.sort((a, b) => {
    const nameA = a.location.toUpperCase()
    const nameB = b.location.toUpperCase()

    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })

  return res
}

export const getTodayDate = () => {
  const date = new Date()
  return formatDate(date)
}

export const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}

export const getFirstAndLastDates = (array) => {
  if (array.length === 0) {
    return null
  }

  const dates = array.map(obj => obj.date)
  const sortedDates = dates.sort((a, b) => a - b)

  const firstDate = formatDate(new Date(sortedDates[0]))
  const lastDate = formatDate(new Date(sortedDates[sortedDates.length - 1]))

  return { firstDate, lastDate }
}

export const filterArrayByKey = (array, filters) => {
  return array.filter(item => {
    for (const key in filters) {
      if (key === 'date') {
        const filterDate = new Date(filters[key])
        const itemDate = item[key]

        if (
          !filterDate ||
          !itemDate ||
          filterDate.getTime() !== itemDate.getTime()
        ) {
          return false
        }
      } else {
        if (item[key] !== filters[key]) {
          return false
        }
      }
    }
    return true
  })
}

export const getUniqueKey = (array, key) => {
  const uniqueKey = new Set()

  array.forEach(item => {
    let element = item[key]
    if (key === 'date') {
      element = new Date(element).setHours(0, 0, 0, 0)
    }
    uniqueKey.add(element)
  })

  return Array.from(uniqueKey)
}

export const getDistributionByLocation = (data) => {
  const res = []

  data.forEach((cut) => {
    const locate = cut.location
    const index = res.findIndex((obj) => obj.Localidad === locate)

    if (index !== -1) {
      res[index].Cantidad++
    } else {
      res.push({ Localidad: locate, Cantidad: 1 })
    }
  })

  return res
}

export const getDistributionBystartAndDuration = (data) => {
  const res = []

  data.forEach((cut) => {
    const startDuration = cut.startAndDuration
    const index = res.findIndex((obj) => obj.Duracion === startDuration)

    if (index !== -1) {
      res[index].Cantidad++
    } else {
      res.push({ Duracion: startDuration, Cantidad: 1 })
    }
  })

  return res
}

export const getDistributionByjobType = (data) => {
  const res = []

  data.forEach((cut) => {
    const jobType = cut.jobType
    const index = res.findIndex((obj) => obj.Tipo === jobType)

    if (index !== -1) {
      res[index].Cantidad++
    } else {
      res.push({ Tipo: jobType, Cantidad: 1 })
    }
  })

  return res
}

export const getDistributionByDate = (data) => {
  const res = []

  data.forEach((cut) => {
    const date = cut.date

    const index = res.findIndex((obj) => obj.Fecha === formatDate(date))

    if (index !== -1) {
      res[index].Cantidad++
    } else {
      res.push({ Fecha: formatDate(date), Cantidad: 1 })
    }
  })

  return res
}

export const formatDateUTC = (date) => {
  const dateForm = new Date(new Date(date).getUTCFullYear(), new Date(date).getUTCMonth(), new Date(date).getUTCDate())
  return dateForm
}
