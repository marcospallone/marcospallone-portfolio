'use client';

import { titles } from '@/app/data/hero';
import { useCursor } from '@/app/providers';
import { Box, Container, Grid } from '@mui/material';
import { ArrowDown, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Chip from '../../atoms/Chip/Chip';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import Magnetic from '../../atoms/Magnetic/Magnetic';
import Row from '../../atoms/Row/Row';
import HeroWorkProcess from '../../molecules/HeroWorkProcess/HeroWorkProcess';

const Hero: React.FC = () => {
  const keywords = titles;
  const [index, setIndex] = useState(0);
  const current = keywords[index];
  const { setCursorType } = useCursor();

  const handleFirstButtonClick = () => {
    const element = document.querySelector('#skills');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleDownloadCV = () => {
    window.open('/docs/CV_Spallone_Marco.pdf', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='hero' className="relative flex flex-col items-center justify-center text-center md:text-left overflow-hidden">
      <Container maxWidth="xl">
        <Row>
          <Grid
            size={{ xs: 12, lg: 6 }}
            className="flex flex-col justify-center h-screen"
          >
            <Chip
              radius={6}
              color="cyan-400"
              backgroundColor="bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
              label='$ echo "Hello, World!"'
            />
            <Box className="mt-4 md:mt-8 mb-4 md:mb-0 font-medium text-xl md:text-2xl lg:text-3xl text-zinc-300 font-mono">
              I'm a
            </Box>
            <h1 className="mt-2 md:mt-4 mb-4 font-bold font-mono text-white title-hero flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.colored}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`${current.color} font-mono font-semibold md:font-bold text-5xl md:text-4xl lg:text-6xl h-full w-full flex items-center justify-center md:justify-start`}
                >
                  <span className="text-zinc-200">{current.prefix}</span>{' '}
                  {current.colored}{' '}
                  <span className="text-zinc-200">{current.suffix}</span>
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="mt-4 mb-4 font-medium text-lg md:text-2xl lg:text-3xl text-zinc-300">
              I help turn ideas into real, working{' '}
              <span className="text-cyan-400 text-bold">software</span>. From
              understanding business needs to designing, building and maintaining reliable{' '}
              <span className="text-purple-400 text-bold">digital products</span> — with a
              strong focus on clarity, quality and long-term value.
            </p>
            <Box className="flex mt-6">
              <Magnetic>
                <CustomButton
                  radius={6}
                  children="Explore Skills"
                  background="bg-gradient-to-r from-cyan-500 to-purple-600"
                  customClass="!text-white hover:from-cyan-600 hover:to-purple-700 border-0 group font-mono text-base font-bold"
                  endIcon={
                    <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  }
                  onClick={handleFirstButtonClick}
                  onMouseEnter={() => setCursorType('link')}
                  onMouseLeave={() => setCursorType('default')}
                />
              </Magnetic>
              <Magnetic>
                <CustomButton
                  radius={6}
                  children="Download CV"
                  background="bg-transparent"
                  customClass="!text-cyan-400 hover:bg-cyan-600 hover:text-white ml-4 font-mono text-base font-bold !border border-cyan-400 hover:border-zinc-100 border-button"
                  startIcon={<Mail className="w-5 h-5 mr-2 ml-0" />}
                  onClick={handleDownloadCV}
                  onMouseEnter={() => setCursorType('link')}
                  onMouseLeave={() => setCursorType('default')}
                />
              </Magnetic>
            </Box>
            <Box></Box>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 6 }}
            className="flex flex-col justify-center h-auto md:h-screen"
          >
            <HeroWorkProcess />
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
