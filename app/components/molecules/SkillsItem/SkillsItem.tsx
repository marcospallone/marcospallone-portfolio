'use client';

import { motion } from 'motion/react';

interface SkillItemProps {
  category: any;
  index: number;
  isFlipped: boolean;
  setWhichFlipped: (i: number | null) => void;
}

const SkillsItem: React.FC<SkillItemProps> = ({
  category,
  index,
  isFlipped,
  setWhichFlipped,
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      className="perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-[400px] cursor-pointer"
        onHoverStart={() => setWhichFlipped(index)}
        onHoverEnd={() => setWhichFlipped(null)}
        onClick={() => setWhichFlipped(index)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 blur-2xl`}
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div
              className={`relative h-full bg-gradient-to-br from-zinc-900/95 via-black/95 to-zinc-900/95 backdrop-blur-xl border-2 ${category.borderColor}/50 hover:${category.borderColor} rounded-2xl p-8 flex flex-col items-center justify-center transition-all`}
            >
              <motion.div
                className="mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 blur-xl"
                    style={{ backgroundColor: category.color }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Icon
                    className="relative w-24 h-24"
                    style={{ color: category.color }}
                  />
                </div>
              </motion.div>

              <h3
                className="text-3xl mb-3 font-extralight"
                style={{ color: category.color }}
              >
                {category.name}
              </h3>

              <p className="text-zinc-300 text-center mb-6">
                {category.skills.length} technologies
              </p>

              <motion.div
                className="flex items-center gap-2 text-zinc-500 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>Explore</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: category.color }}
                />
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div
              className={`relative h-full bg-gradient-to-br from-zinc-900/95 via-black/95 to-zinc-900/95 backdrop-blur-xl border-2 rounded-2xl p-6 overflow-y-auto`}
              style={{ borderColor: category.color }}
            >
              <div
                className="flex items-center gap-3 mb-6 pb-4 border-b"
                style={{ borderColor: `${category.color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color: category.color }} />
                <h4 style={{ color: category.color }}>{category.name}</h4>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-y-4 md:gap-y-0 gap-0 md:gap-2">
                {category.skills.map((skill: any, skillIndex: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isFlipped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group/skill"
                  >
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity blur-md"
                      style={{ backgroundColor: `${category.color}40` }}
                    />
                    <div className="text-3xl mb-2 flex justify-center">
                      <skill.icon fill="#e4e4e7" />
                    </div>
                    <div className="text-sm text-center font-mono text-zinc-300">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsItem;
