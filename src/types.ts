export interface Chapter {
  id: string;
  babNum: number; // 1 to 15
  grade: 7 | 8 | 9;
  title: string;
  summary: string;
  content: string;
  techniques: string[];
  exercises: string[];
}

export interface Figure {
  id: string;
  name: string;
  era: string;
  category: 'Yunani-Romawi Klasik' | 'Tokoh Islam Agung' | 'Pahlawan Nusantara' | 'Pemimpin Dunia' | 'Tokoh Modern & Sains';
  quote: string;
  story: string;
  lessons: string[];
  isExpandedByAi?: boolean;
  oratoricalStyle?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}
