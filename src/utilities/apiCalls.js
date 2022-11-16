import { cleanCodingData, cleanGeneralData } from "./dataCleaning"

export const fetchGeneralData = async (amount, category, difficulty) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
    if(!response.ok) {
      throw Error(response.status)
    }
    const data = await  response.json()
    // console.log('raw', data)
    const cleanData = cleanGeneralData(data)
    // console.log('clean', cleanData)
    return cleanData
  }
  
  export const fetchCodingData = async (difficulty, amount, category, ) => {
    const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0&category=code&difficulty=${difficulty}&limit=${amount}&tags=${category}`, {
      method: "GET",
      headers: new Headers ({
        'x-api-key': 'fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0',
      }),
    })
    if(!response.ok) {
      throw Error(response.statusText + response.status)
    }
    const data = await response.json()
    // console.log('raw', data)
    const cleanData = cleanCodingData(data)
    // console.log('clean', cleanData)
    return cleanData
  }
