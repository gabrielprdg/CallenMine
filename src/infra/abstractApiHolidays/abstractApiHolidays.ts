import axios from 'axios'

export const apiHolidays = (country: string, day: number, month: number, year: number) => {
  console.log('ter', day,month,year)
  const baseURL = `https://holidays.abstractapi.com/v1/?api_key=efc600a75c0d4de8939a396210415b2d&country=${country}&year=${year}&month=${month}&day=${day}`
  return baseURL
}

