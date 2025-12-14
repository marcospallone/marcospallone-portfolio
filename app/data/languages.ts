import { SubtitleKeyword } from "../models/subtitle-interface";

export interface LanguageProps {
  language: string;
  level: string;
  countryCode: string;
}

export const languages: LanguageProps[] = [
    { language: 'Italian', level: 'Native', countryCode: 'IT' },
    { language: 'English', level: 'Professional', countryCode: 'GB' },
    { language: 'German', level: 'Basic (actually studying it)', countryCode: 'DE' }
];

export const subtitleKeywords: SubtitleKeyword[] = [
  {
    prefix: 'Communicating ideas across',
    colored: 'cultures',
    suffix: 'and teams.',
    color: 'text-cyan-400',
  },
  {
    prefix: 'Working effectively in',
    colored: 'international',
    suffix: 'environments.',
    color: 'text-purple-400',
  },
  {
    prefix: 'Bridging technical and human',
    colored: 'communication,',
    suffix: 'every day.',
    color: 'text-emerald-400',
  },
  {
    prefix: 'Language as a tool for',
    colored: 'collaboration,',
    suffix: 'not just translation.',
    color: 'text-rose-400',
  },
];
