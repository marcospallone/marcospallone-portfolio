'use client';

import { StatProps } from '@/app/data/about';
import { ExperienceProps, experiences } from '@/app/data/experience';
import { Box, Container, Grid } from '@mui/material';
import Row from '../../atoms/Row/Row';
import StatItem from '../../molecules/StatItem/StatItem';
import ExperienceItem from '../../molecules/ExperienceItem/ExperienceItem';

const Experience: React.FC = () => {
  return (
    <section>
      <Container className="py-20">
        <Row>
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'<experience>'}</span>
            </Box>
            <Box className="mt-8">
              <p className="text-xl text-center text-zinc-300 italic">
                My career path and educational background
              </p>
            </Box>
          </Grid>
        </Row>
        <Row className="relative mt-8">
          <Box className="absolute left-8 md:left-1/2 top-0 bottom-12 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-rose-500" />
          {experiences.map((experience: ExperienceProps, index: number) => (
            <Grid key={index} size={12}>
              <ExperienceItem experience={experience} index={index} />
            </Grid>
          ))}
        </Row>
        <Row className="mt-8">
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'</experience>'}</span>
            </Box>
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
