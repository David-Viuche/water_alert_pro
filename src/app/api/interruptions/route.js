import { NextResponse } from 'next/server'
import fs from 'fs/promises'

export async function GET() {
  try {
    const fileData = await fs.readFile('src/db/data.json', 'utf8')
    const data = JSON.parse(fileData)

    return NextResponse.json({ data })
  } catch (error) {
    console.log({ msg: 'Error reading file ', error })
    return NextResponse.json({ error: 'Error: intente más tarde' })
  }
}
