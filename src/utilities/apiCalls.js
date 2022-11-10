const fetchGeneralData = async (difficulty, amount, category) => {
  const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0&category=code&difficulty=${difficulty}&limit=${amount}&tags=${category}`, {
    method: "GET",
    headers: new Headers ({
      'x-api-key': 'fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0',
    }),
  })
  if(!response.ok) {
    throw Error(response.statusText + response.status)
  }
  return await response.json()
}

 const fetchCodingData = async (difficulty, amount, category, ) => {
    const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0&category=code&difficulty=${difficulty}&limit=${amount}&tags=${category}`, {
      method: "GET",
      headers: new Headers ({
        'x-api-key': 'fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0',
      }),
    })
    if(!response.ok) {
      throw Error(response.statusText + response.status)
    }
    return await response.json()
  }
  