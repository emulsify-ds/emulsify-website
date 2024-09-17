import * as google from 'google-auth-library'

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
]

const jwt = new google.JWT({
  email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  scopes: SCOPES,
})

export default jwt
