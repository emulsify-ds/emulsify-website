import * as google from 'google-auth-library'
import creds from '../../google-services.json'

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
]

const jwt = new google.JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: SCOPES,
})

export default jwt
