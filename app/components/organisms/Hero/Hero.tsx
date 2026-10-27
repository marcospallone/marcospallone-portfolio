'use client';

import { socialLinks } from '@/app/data/contacts';
import { titles } from '@/app/data/hero';
import { useCursor } from '@/app/providers';
import { Box, Container, Grid } from '@mui/material';
import { ArrowDown, Download } from 'lucide-react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { useEffect, useState } from 'react';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import Magnetic from '../../atoms/Magnetic/Magnetic';
import Row from '../../atoms/Row/Row';
import HeroWorkProcess from '../../molecules/HeroWorkProcess/HeroWorkProcess';

const DOT_COLORS: Record<string, string> = {
  'text-cyan-400': '#22d3ee',
  'text-purple-400': '#c084fc',
  'text-rose-400': '#fb7185',
  'text-emerald-400': '#34d399',
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const Hero: React.FC = () => {
  const keywords = titles;
  const [index, setIndex] = useState(0);
  const current = keywords[index];
  const { setCursorType } = useCursor();

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownloadCV = () => {
    window.open('/docs/CV_Spallone_Marco.pdf', '_blank', 'noopener,noreferrer');
  };

  const linkCursor = {
    onMouseEnter: () => setCursorType('link'),
    onMouseLeave: () => setCursorType('default'),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [keywords.length, index]);

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-[100svh] pt-28 pb-20 lg:py-24 overflow-hidden"
    >
      <Container>
        <Row alignItems="center">
          <Grid size={{ xs: 12, lg: 7 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Eyebrow */}
              <motion.p
                variants={fadeUp}
                className="flex items-center gap-3 text-lg md:text-xl font-medium text-zinc-300"
              >
                <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" aria-hidden />
                Hi there, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1
                variants={fadeUp}
                className="mt-4 md:mt-5 font-bold tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-zinc-50"
              >
                Marco{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
                  Spallone
                </span>
              </motion.h1>

              {/* Rotating role */}
              <motion.div variants={fadeUp} className="mt-5 md:mt-6 w-full">
                <div className="flex items-center justify-center md:justify-start gap-3 font-mono text-lg sm:text-xl xl:text-2xl">
                  <span className="text-zinc-500 select-none" aria-hidden>
                    &gt;
                  </span>
                  <div className="relative h-[1.75rem] xl:h-[2rem] overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.p
                        key={current.colored}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                        className={`${current.color} font-semibold leading-[1.75rem] xl:leading-[2rem] whitespace-nowrap`}
                      >
                        {current.prefix && <span className="text-zinc-200">{current.prefix}&nbsp;</span>}
                        {current.colored}
                        {current.suffix && <span className="text-zinc-200">&nbsp;{current.suffix}</span>}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <motion.span
                    aria-hidden
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                    className="-ml-2 inline-block w-[0.55em] h-[1.1em] rounded-[2px] bg-zinc-300/70"
                  />
                </div>

                <div className="flex justify-center md:justify-start gap-1.5 mt-4">
                  {keywords.map((kw, i) => (
                    <button
                      key={kw.colored}
                      type="button"
                      aria-label={`Show "${kw.colored}"`}
                      onClick={() => setIndex(i)}
                      {...linkCursor}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === index ? 'w-6' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                      }`}
                      style={i === index ? { backgroundColor: DOT_COLORS[kw.color] ?? '#22d3ee' } : undefined}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Pitch */}
              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-zinc-400"
              >
                I help turn ideas into real, working{' '}
                <span className="text-cyan-300 font-medium">software</span>. From understanding
                business needs to designing, building and maintaining reliable{' '}
                <span className="text-purple-300 font-medium">digital products</span>, with a strong
                focus on clarity, quality and long-term value.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
              >
                <Magnetic>
                  <CustomButton
                    radius={8}
                    background="bg-gradient-to-r from-cyan-500 to-purple-600"
                    customClass="!text-white !normal-case border-0 group font-mono text-sm md:text-base font-semibold shadow-[0_8px_30px_-8px_rgba(34,211,238,0.5)] hover:from-cyan-400 hover:to-purple-500"
                    endIcon={<ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />}
                    onClick={() => scrollTo('#skills')}
                    {...linkCursor}
                  >
                    Explore skills
                  </CustomButton>
                </Magnetic>
                <Magnetic>
                  <CustomButton
                    radius={8}
                    background="bg-white/[0.03]"
                    customClass="!text-zinc-200 !normal-case font-mono text-sm md:text-base font-semibold border-button !border-white/15 backdrop-blur-sm hover:!border-cyan-400/70 hover:!text-cyan-300 hover:bg-cyan-400/5 transition-colors"
                    startIcon={<Download className="w-4 h-4" />}
                    onClick={handleDownloadCV}
                    {...linkCursor}
                  >
                    Download CV
                  </CustomButton>
                </Magnetic>
              </motion.div>

              {/* Meta row */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex items-center justify-center md:justify-start"
              >
                <Box className="flex items-center gap-5">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      {...linkCursor}
                      className="text-zinc-500 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }} className="mt-16 lg:mt-0">
            <HeroWorkProcess />
          </Grid>
        </Row>
      </Container>

      {/* Scroll hint */}
      <button
        type="button"
        onClick={() => scrollTo('#about')}
        {...linkCursor}
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        Scroll
        <span className="relative block h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-cyan-400"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </button>
    </section>
  );
};

export default Hero;
