import { Chapter } from '../types';
import { chapters7 } from './chapters7';
import { chapters8 } from './chapters8';
import { chapters9 } from './chapters9';

export const initialChapters: Chapter[] = [
  ...chapters7,
  ...chapters8,
  ...chapters9
];
