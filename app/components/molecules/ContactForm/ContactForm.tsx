import { ContactInfoProps } from '@/app/data/contacts';
import { Box } from '@mui/material';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '../../atoms/Input/Input';
import { Textarea } from '../../atoms/Textarea/Textarea';
import CustomButton from '../../atoms/CustomButton/CustomButton';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      toast.success('Message sent successfully!', {
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send message', {
        description: 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base text-zinc-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/40 border-cyan-500/30 focus:border-cyan-500 text-white mt-3"
                  placeholder="Your name"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-base text-zinc-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/40 border-cyan-500/30 focus:border-cyan-500 text-white mt-3"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="block text-base text-zinc-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-black/40 border-cyan-500/30 focus:border-cyan-500 text-white mt-3"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-base text-zinc-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-black/40 border-cyan-500/30 focus:border-cyan-500 text-white resize-none mt-3"
                  placeholder="Tell me about your project..."
                />
              </div>

              <CustomButton
                type="submit"
                disabled={isSubmitting}
                background="bg-emerald-500"
                customClass="
                  w-full
                  hover:bg-emerald-800
                  text-white
                  font-medium
                  rounded-lg
                  transition-colors duration-300 ease-out
                  border-0
                  font-mono
                  lowercase
                "
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    contacting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    npm run contact-marco
                  </>
                )}
              </CustomButton>
            </form>
          </div>
        </div>
      </motion.div>
    </Box>
  );
};

export default ContactForm;
