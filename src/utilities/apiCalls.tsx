import { cleanCodingData, cleanGeneralData } from "./dataCleaning";

type generalData = {
  amount: number;
  category: number;
  difficulty: string;
}

type codingData = {
  difficulty: string;
  amount: number;
  category: string;
}

export const fetchGeneralData = async ({ amount, category, difficulty }: generalData) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  if (!response.ok) {
    throw Error(response.statusText + response.status);
  }
  const data = await response.json();
  const cleanData = cleanGeneralData(data);
  return cleanData;
};

export const fetchCodingData = async ({ difficulty, amount, category }: codingData) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0&category=code&difficulty=${difficulty}&limit=${amount}&tags=${category}`,
    {
      method: "GET",
      headers: new Headers({
        "x-api-key": "fOOXMCrttW3G5ioF0nKQ3PCnmeNIW54wuCg04zQ0",
      }),
    }
  );
  if (!response.ok) {
    throw Error(response.statusText + response.status);
  }
  const data = await response.json();
  const cleanData = cleanCodingData(data);
  return cleanData;
};
