import { ContactInfoProps } from '@/app/data/contacts';
import { Box } from '@mui/material';
import { motion } from 'motion/react';

interface ContactInfoItemProps {
  item: ContactInfoProps;
  index: number;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ item, index }) => {
  return (
    <Box>
      <motion.a
        key={index}
        href={item.href}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
        whileHover={{ x: 10 }}
        className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:border-cyan-500 transition-colors group"
      >
        <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
          <item.icon className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <p className="text-zinc-400 text-sm">{item.label}</p>
          <p className="text-zinc-200">{item.value}</p>
        </div>
      </motion.a>
    </Box>
  );
};

export default ContactInfoItem;
