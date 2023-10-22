export default function Icon({ icon, size, weight }: { icon: string, size: number, weight: string }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <use xlinkHref={`/sprites/${weight}.svg#${icon}`} fill="currentColor" />
    </svg>
  );
}