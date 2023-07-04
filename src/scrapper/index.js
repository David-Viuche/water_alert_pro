const { chromium } = require('playwright')
const fs = require('fs')

const getMonthNumber = (monthName) => {
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ]

  return months.findIndex((element) => element === monthName)
}

const getDateFromText = (dateString) => {
  const components = dateString.match(/(\d{1,2}) de (\w+) de (\d{4})/)
  const day = parseInt(components[1])
  const month = getMonthNumber(components[2])
  const year = parseInt(components[3])

  const date = new Date(year, month, day)

  return date.getTime() // timestamp en milisegundos
}

(async () => {
  const data = []
  try {
    const browser = await chromium.launch({ devtools: false })

    const page = await browser.newPage({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36'
    })

    await page.goto('https://www.acueducto.com.co/wpsportal/wps/portal/EAB2/Home/atencion-al-usuario/programacion_cortes')

    // await page.goto('http://localhost:8080/Programaci%C3%B3n%20de%20cortes.html')

    const tables = await page.$$('.table')

    const lastTable = tables[tables.length - 1]

    const rows = await lastTable.$$('tr')

    let dateJob = ''

    for (let i = 1; rows.length > i; i++) {
      const row = rows[i]
      const cells = await row.$$('td')
      const rowData = []

      for (const cell of cells) {
        const cellText = await cell.innerText()
        rowData.push(cellText)
      }

      if (cells.length === 1) {
        dateJob = rowData[0]
        continue
      }

      const info = {
        date: getDateFromText(dateJob),
        location: rowData[0].replace(/\n/g, '').trim(),
        neighborhoods: rowData[1].replace(/\n/g, '').trim(),
        addresses: rowData[2].split('\n').map((item) => item.trim()).filter(Boolean),
        startAndDuration: rowData[3].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim(),
        jobType: rowData[4].replace(/\n/g, '').trim()
      }

      data.push(info)
    }

    await browser.close()
  } catch (error) {
    console.error({ msg: 'Error Scrapper', error })
  }

  try {
    const jsonData = JSON.stringify(data)

    fs.writeFile('src/db/data.json', jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Failed to save file:', err)
      } else {
        console.log('The JSON file has been saved successfully')
      }
    })
  } catch (error) {
    console.error({ msg: 'Error data to file', error })
  }
})()
