'use client';

import { languages, subtitleKeywords } from '@/app/data/languages';
import { Box, Container, Grid } from '@mui/material';
import Row from '../../atoms/Row/Row';
import LanguageItem from '../../molecules/LanguageItem/LanguageItem';
import SectionSubtitle from '../../molecules/SectionSubtitle/SectionSubtitle';

const Languages: React.FC = () => {
  return (
    <section id="languages">
      <Container className="py-10 md:py-20">
        <Row>
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'<languages>'}</span>
            </Box>
            <Box className="mt-8">
              <SectionSubtitle keywords={subtitleKeywords} delay={3200} />
            </Box>
          </Grid>
        </Row>
        <Row className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 perspective-1000 w-full">
            {languages.map((language, index) => (
              <LanguageItem key={index} language={language} index={index} />
            ))}
          </div>
        </Row>
        <Row className="mt-8">
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'</languages>'}</span>
            </Box>
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Languages;
