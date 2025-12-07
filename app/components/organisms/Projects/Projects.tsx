'use client';

import { projects } from '@/app/data/projects';
import { Box, Container, Grid } from '@mui/material';
import Row from '../../atoms/Row/Row';
import ProjectItem from '../../molecules/ProjectItem/ProjectItem';

const Projects: React.FC = () => {
  return (
    <section>
      <Container className="py-20">
        <Row>
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'<projects>'}</span>
            </Box>
            <Box className="mt-8">
              <p className="text-xl text-center text-zinc-300 italic">
                Selected works that showcase my expertise
              </p>
            </Box>
          </Grid>
        </Row>
        <Row className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 perspective-1000 w-full">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} index={index} />
            ))}
          </div>
        </Row>
        <Row className="mt-8">
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'</projects>'}</span>
            </Box>
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
