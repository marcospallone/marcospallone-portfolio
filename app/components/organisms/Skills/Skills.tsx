'use client';

import { skills } from '@/app/data/skills';
import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';
import Row from '../../atoms/Row/Row';
import SkillsItem from '../../molecules/SkillsItem/SkillsItem';

const Skills: React.FC = () => {
  const [whichFlipped, setWhichFlipped] = useState<number | null>(0);

  return (
    <section id='skills'>
      <Container className="py-20">
        <Row>
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'<skills>'}</span>
            </Box>
            <Box className="mt-8">
              <p className="text-xl text-center text-zinc-300 italic">
                Technologies and tools I master
              </p>
            </Box>
          </Grid>
        </Row>
        <Row className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 perspective-1000 w-full">
            {skills.map((category, index) => (
              <SkillsItem
                key={category.id}
                category={category}
                index={index}
                isFlipped={whichFlipped === index}
                setWhichFlipped={setWhichFlipped}
              />
            ))}
          </div>
        </Row>
        <Row className="mt-8">
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'</skills>'}</span>
            </Box>
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
