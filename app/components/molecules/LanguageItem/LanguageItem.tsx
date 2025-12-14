'use client';

import { LanguageProps } from '@/app/data/languages';
import { Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import ReactCountryFlag from 'react-country-flag';

interface LanguageItemProps {
  language: LanguageProps;
  index: number;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ language, index }) => {
  return (
    <>
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="relative group w-full overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-center"
          style={{
            backgroundImage: `url(https://flagcdn.com/w320/${language.countryCode.toLowerCase()}.png)`,
            backgroundSize: index === 2 ? 'contain' : 'cover',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-black/60 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500 transition-colors">
          <div className="flex items-center gap-4">
            <div className='border border-purple-500/80 flex rounded-md overflow-hidden'>
              <ReactCountryFlag
                countryCode={language.countryCode}
                svg
                style={{ width: '100%', height: '2em' }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-cyan-400 mb-1">{language.language}</h3>
              <p className="text-zinc-400 text-sm">{language.level}</p>
            </div>
            <Globe2 className="w-5 h-5 text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LanguageItem;
