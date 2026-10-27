interface SectionTagProps {
  name: string;
  closing?: boolean;
}

const SectionTag: React.FC<SectionTagProps> = ({ name, closing }) => {
  return (
    <div className="flex items-center justify-center gap-4 w-full font-mono text-sm md:text-base">
      <span className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-cyan-500/40" aria-hidden />
      <span>
        <span className="text-zinc-500">{closing ? '</' : '<'}</span>
        <span className="text-cyan-400">{name}</span>
        <span className="text-zinc-500">{'>'}</span>
      </span>
      <span className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-cyan-500/40" aria-hidden />
    </div>
  );
};

export default SectionTag;
