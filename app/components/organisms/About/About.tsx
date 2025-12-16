'use client';

import {
  MetricProps,
  metrics,
  StatProps,
  stats,
  subtitleKeywords,
} from '@/app/data/about';
import { Box, Container, Grid } from '@mui/material';
import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import Row from '../../atoms/Row/Row';
import CodeSnippet from '../../molecules/CodeSnippet/CodeSnippet';
import MetricItem from '../../molecules/MetricItem/MetricItem';
import StatItem from '../../molecules/StatItem/StatItem';
import SectionSubtitle from '../../molecules/SectionSubtitle/SectionSubtitle';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen">
      <Container className="py-10 md:py-20">
        <Row>
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'<about>'}</span>
            </Box>
            <Box className="mt-8">
              <SectionSubtitle keywords={subtitleKeywords} delay={2800} />
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex flex-col justify-center"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-zinc-200 text-lg text-center md:text-left"
              >
                I’m a full-stack developer focused on building scalable, high-quality web
                applications. I turn complex problems into clean, maintainable solutions
                through thoughtful architecture and well-crafted code.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-4 text-zinc-200 text-lg text-center md:text-left"
              >
                Working across frontend and backend, I bridge design and engineering to
                deliver reliable, performant products with long-term impact.
              </motion.p>
            </motion.div>
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
                    <Box className="ml-auto flex flex-row-reverse md:flex-row md items-center gap-2">
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
