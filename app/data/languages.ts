
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
