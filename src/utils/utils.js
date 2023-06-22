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

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}
