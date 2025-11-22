import { Container, Grid } from "@mui/material";
import Chip from "../../atoms/Chip/Chip";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      <Container>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Chip
            radius={1.5}
            borderColor="cyan-400"
            backgroundColor="bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
            label='$ echo "Hello, World!"'
          />
          
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}></Grid>
      </Container>
    </section>
  );
};

export default Hero;
