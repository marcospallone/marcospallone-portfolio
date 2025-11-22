"use client";

import { Box, Container, Grid } from "@mui/material";
import Chip from "../../atoms/Chip/Chip";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Row from "../../atoms/Row/Row";
import { ArrowRight, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-left overflow-hidden">
      <Container>
        <Row>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Chip
              radius={6}
              color="cyan-400"
              backgroundColor="bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
              label='$ echo "Hello, World!"'
            />
            <Box className="mt-8 mb-4 font-medium text-2xl md:text-3xl lg:text-4xl text-zinc-400">
              I'm a
            </Box>
            <h1 className="mt-4 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              Full Stack Engineer
            </h1>
            <p className="mt-4 mb-4 font-medium text-xl md:text-2xl lg:text-3xl text-zinc-400">
              I craft{" "}
              <span className="text-cyan-400 text-bold">
                scalable web applications
              </span>{" "}
              and turn complex problems into
              <span className="text-purple-500 text-bold">
                {" "}
                elegant solutions
              </span>
              . Specialized in modern JavaScript frameworks and cloud
              architecture.
            </p>
            <Box className="flex mt-6">
              <CustomButton
                radius={6}
                label="Explore My Work"
                background="bg-gradient-to-r from-cyan-500 to-purple-600"
                customClass="!text-white hover:from-cyan-600 hover:to-purple-700 border-0 group"
                endIcon={
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                }
              />
              <CustomButton
                radius={6}
                label="Explore My Work"
                background="bg-white"
                customClass="!text-cyan-400 hover:bg-cyan-600 hover:text-white ml-4"
                startIcon={<Mail className="w-4 h-4 mr-2" />}
              />
            </Box>
            <Box></Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}></Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
