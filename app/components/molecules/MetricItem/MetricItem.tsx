'use client';

import { MetricProps } from '@/app/data/about';
import { Box } from '@mui/material';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface MetricItemProps {
  metric: MetricProps;
  index: number;
}

const MetricItem: React.FC<MetricItemProps> = ({ metric, index }) => {
  const Icon = metric.icon;

  return (
    <motion.div
      key={metric.name}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.2 }}
      className="space-y-3"
    >
      <Box className="flex items-center justify-between">
        <Box className="flex items-center gap-2">
          <Icon className={`w-5 h-5 text-${metric.color}-400`} />
          <span className="text-gray-300 font-mono text-sm">{metric.name}</span>
        </Box>
        <Box className="flex items-center gap-2">
          <span className={`text-2xl font-bold text-${metric.color}-400`}>
            {metric.value}%
          </span>
        </Box>
      </Box>

      <Box className="relative h-3 rounded-full overflow-hidden bg-black/60 border border-cyan-500/20">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${metric.value}%` }}
          transition={{
            duration: 1,
            delay: 0.8 + index * 0.2,
            ease: 'easeOut',
          }}
          className={`h-full relative overflow-hidden rounded-full ${
            metric.color === 'cyan'
              ? 'bg-gradient-to-r from-cyan-500 to-cyan-400'
              : metric.color === 'purple'
              ? 'bg-gradient-to-r from-purple-500 to-purple-400'
              : metric.color === 'green'
              ? 'bg-gradient-to-r from-green-500 to-green-400'
              : 'bg-gradient-to-r from-orange-500 to-orange-400'
          }`}
        >
          <motion.div
            className="absolute top-0 h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 blur-sm"
            animate={{ x: ['-100%', '2000%'] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '40px' }}
          />
        </motion.div>
      </Box>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 + index * 0.1 }}
        className={`text-xs text-${metric.color}-400 font-mono flex items-center gap-1`}
      >
        <CheckCircle2 className="w-3 h-3" />
        {metric.text}
      </motion.div>
    </motion.div>
  );
};

export default MetricItem;
