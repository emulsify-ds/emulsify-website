import { appendToSheet } from '../../utils/sheet'

export default async function handler(req, res) {
  try {
    const { name, email } = req.body
    await appendToSheet({
      name,
      email,
    })
    res.status(200).json({
      message: 'Success save data',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
