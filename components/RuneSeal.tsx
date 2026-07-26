type RuneSealProps = {
  size?: number;
  opacity?: number;
};

export default function RuneSeal({ size = 28, opacity = 1 }: RuneSealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill="none" stroke="var(--oro-munin)" strokeWidth={2.5}>
        <circle cx="50" cy="50" r="44" strokeDasharray="2 8" strokeLinecap="round" />
        <path d="M38 28 L38 72 M62 28 L62 72 M38 28 L62 72 M62 28 L38 72" />
      </g>
    </svg>
  );
}
