import { StatProps } from '@/app/data/about';
import { Box } from '@mui/material';
import { motion } from 'motion/react';

interface StatItemProps {
  stat: StatProps;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
    <Box>
      <motion.div
        key={index}
        transition={{ delay: 0.1, type: 'spring' }}
        whileHover={{ scale: 1.05, y: -20 }}
        className="relative group cursor-pointer"
      >
        <Box
          className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/30 to-${stat.color}-600/30 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
        />
        <Box className={`relative bg-black/60 backdrop-blur-xl border border-${stat.color}-500/30 rounded-xl p-6 group-hover:border-${stat.color}-500 transition-all overflow-hidden`}>
          <Box className="relative">
            <Icon className={`w-8 h-8 text-${stat.color}-400 mb-4`} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className={`text-4xl font-bold mb-2 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}
            >
              {stat.value}
            </motion.div>
            <Box className="text-zinc-400 mb-1">{stat.title}</Box>
            <Box className="text-zinc-500 text-xs">{stat.description}</Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default StatItem;
