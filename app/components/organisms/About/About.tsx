'use client';

import { MetricProps, metrics, StatProps, stats } from '@/app/data/about';
import { Box, Container, Grid } from '@mui/material';
import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import Row from '../../atoms/Row/Row';
import CodeSnippet from '../../molecules/CodeSnippet/CodeSnippet';
import MetricItem from '../../molecules/MetricItem/MetricItem';
import StatItem from '../../molecules/StatItem/StatItem';

const About: React.FC = () => {
  return (
    <section>
      <Container className="py-20">
        <Row>
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'<about>'}</span>
            </Box>
            <Box className="mt-8">
              <p className="text-xl text-center text-zinc-300 italic">
                Passionate developer crafting digital experiences
              </p>
            </Box>
          </Grid>
        </Row>
        <Row className="mt-8 flex">
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box className="relative">
                <Box className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-xl opacity-50" />
                <CodeSnippet />
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} className="flex align-center">
            <p className="text-zinc-300 text-lg">
              I'm a passionate full-stack developer with a love for creating innovative
              web applications that make a difference. With expertise in both frontend and
              backend technologies, I bring ideas to life through clean, efficient code.{' '}
              <br />
              <br /> My journey in software development has equipped me with a diverse
              skill set and the ability to tackle complex challenges. I'm constantly
              learning and adapting to new technologies to deliver cutting-edge solutions.
            </p>
          </Grid>
        </Row>
        <Row className="mt-8">
          <Grid size={12}>
            <Box>
              <Box className="relative">
                <Box className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-rose-500/20 rounded-2xl blur-2xl" />
                <Box className="relative bg-black/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
                  <Box className="flex items-center gap-3 mb-8">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-cyan-400">Performance Metrics</h3>
                    <Box className="ml-auto flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-green-500"
                      />
                      <span className="text-green-400 text-sm font-mono">
                        All Systems Optimal
                      </span>
                    </Box>
                  </Box>

                  <Row>
                    {metrics.map((metric: MetricProps, index: number) => (
                      <Grid key={index} size={{ xs: 12, lg: 6 }}>
                        <MetricItem metric={metric} index={index} />
                      </Grid>
                    ))}
                  </Row>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Row>
        <Row className="mt-8">
          {stats.map((stat: StatProps, index: number) => (
            <Grid key={index} size={{ xs: 12, lg: 3 }}>
              <StatItem stat={stat} index={index} />
            </Grid>
          ))}
        </Row>
        <Row className="mt-8">
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'</about>'}</span>
            </Box>
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default About;
