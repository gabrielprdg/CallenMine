const getFieldsFormated = (dateComplete: Date) => {
  const month = dateComplete.getDate()
  const day = dateComplete.getMonth() + 1
  const year = dateComplete.getFullYear()

  return {
    day,
    month,
    year
  }
}

export const dateHelper = (dateFormatBr:any) => {
  const dateInIsoFormat = new Date(dateFormatBr)

  const { day, month, year } = getFieldsFormated(dateInIsoFormat)
  console.log('tome2',day,month,year)

  const dateFormatDefault = `${month}-${day}-${year}`

  const isoDateFormatDefault = new Date(dateFormatDefault)
  console.log('4',isoDateFormatDefault)
  const dayDefault = isoDateFormatDefault.getDate()
  const monthDefault = isoDateFormatDefault.getMonth() + 1
  const yearDefault = isoDateFormatDefault.getFullYear()

  return {
    dayDefault,
    monthDefault,
    yearDefault
  }
}