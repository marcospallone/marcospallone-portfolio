'use client';

import { contactInfo, socialLinks } from '@/app/data/contacts';
import { Box, Container, Grid } from '@mui/material';
import { motion } from 'motion/react';
import Row from '../../atoms/Row/Row';
import ContactInfoItem from '../../molecules/ContactInfoItem/ContactInfoItem';
import ContactSocialItem from '../../molecules/ContactSocialItem/ContactSocialItem';
import ContactForm from '../../molecules/ContactForm/ContactForm';

const Contacts: React.FC = () => {
  return (
    <section>
      <Container className="py-20">
        <Row>
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'<contacts>'}</span>
            </Box>
            <Box className="mt-8">
              <p className="text-xl text-center text-zinc-300 italic">
                Get in touch for collaborations or just a friendly chat
              </p>
            </Box>
          </Grid>
        </Row>
        <Row className="mt-8">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-cyan-400 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <ContactInfoItem key={index} item={info} index={index} />
                  ))}
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-purple-400 mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <ContactSocialItem key={index} social={social} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm />
          </Grid>
        </Row>
        <Row className="mt-8">
          <Grid size={12}>
            <Box className="flex justify-center">
              <span className="font-mono text-cyan-400">{'</contacts>'}</span>
            </Box>
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Contacts;
