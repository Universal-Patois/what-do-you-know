export interface QuestionInterface {
  id: number;
  questionNumber: number;
  topic: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  choices: string[];
}

export interface Lookup {
  [key: string]: number;
}

export interface Selection {
  [key: string]: string;
}
