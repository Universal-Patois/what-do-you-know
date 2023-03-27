import { cleanCodingData, cleanGeneralData } from './dataCleaning';

export const fetchGeneralData = async (amount: number, category: number, difficulty: string) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  if (!response.ok) {
    throw Error(response.status + response.statusText);
  }
  const data = await response.json();
  return cleanGeneralData(data);
};

export const fetchCodingData = async (difficulty: string, amount: number, category: string) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0&category=code&difficulty=${difficulty}&limit=${amount}&tags=${category}`,
    {
      method: 'GET',
      headers: new Headers({
        'x-api-key': 'fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0'
      })
    }
  );
  if (!response.ok) {
    throw Error(response.status + response.statusText);
  }
  const data = await response.json();
  return cleanCodingData(data);
};
