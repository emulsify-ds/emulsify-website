const eventFormatter = (rawDate) => {
  const epoch = Date.parse(rawDate)
  const dateNow = new Date()
  const epochNow = Date.parse(dateNow)
  const diff = Math.round((epochNow - epoch) / 1000 / 60 / 60 / 24)
  const absoluteDate = new Date(epoch)
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let formattedDate = ''

  switch (true) {
    case diff === 0:
      formattedDate = `Today`
      break
    case diff === 1:
      formattedDate = `${diff} day ago`
      break
    case diff === -1:
      formattedDate = `In ${Math.abs(diff)} day`
      break
    case diff > 0 && diff <= 6:
      formattedDate = `${diff} days ago`
      break
    case diff < 0 && diff >= 6:
      formattedDate = `In ${Math.abs(diff)} days`
      break
    default:
      formattedDate = `${
        month[absoluteDate.getUTCMonth()]
      } ${absoluteDate.getDate()}, ${absoluteDate.getFullYear()}`
  }

  return formattedDate
}

export default eventFormatter
