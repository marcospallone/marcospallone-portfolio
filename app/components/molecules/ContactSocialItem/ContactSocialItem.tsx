import { SocialLinkProps } from '@/app/data/contacts';
import { motion } from 'motion/react';

interface ContactSocialItemProps {
  social: SocialLinkProps;
  index: number;
}

const ContactSocialItem: React.FC<ContactSocialItemProps> = ({ social, index }) => {
  return (
      <motion.a
        key={index}
        href={social.href}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg hover:border-purple-500 transition-colors group"
        aria-label={social.label}
        target='_blank'
      >
        <social.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
      </motion.a>
  );
};

export default ContactSocialItem;
