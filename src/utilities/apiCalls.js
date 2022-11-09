// import { useEffect } from "react";

// function fetchCodingTrivia() {
//   const [data, setData] = useState({})

//   useEffect(async () => {
//     const result = await fetch(
//       'https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple',
//     )

//     setData(result.data)
//   }, [])

//   // return (

//   // )
// }


const fetchData = async (difficulty, amount, category) => {
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

  // fetchData = async () => {
  //   const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0&category=code&difficulty=Easy&limit=10&tags=JavaScript', {
  //     method: "GET",
  //     headers: new Headers ({
  //       'x-api-key': 'fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0',
  //     }),
  //   })
  //   if(!response.ok) {
  //     throw Error(response.statusText + response.status)
  //   }
  //   return await response.json()
  // }

  // fetchData = async () => {
  //   const response = await fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple')
  //   if(!response.ok) {
  //     throw Error(response.status)
  //   }
  //   return response.json()
  // }

  