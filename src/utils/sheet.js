import { GoogleSpreadsheet } from 'google-spreadsheet'
import jwt from './google'

const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SPREADSHEET_ID, jwt)

export async function appendToSheet(data) {
  await doc.loadInfo() // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0] // assuming the first sheet is where you want to append data
  await sheet.addRow(data)
}
