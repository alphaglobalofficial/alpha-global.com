export function MapEmbed({
  query = "Karachi, Pakistan",
  className,
}: {
  query?: string;
  className?: string;
}) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=12&output=embed`;

  return (
    <div className={className}>
      <iframe
        title="Alpha Global location"
        src={src}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-[320px] w-full rounded-3xl border border-border grayscale invert-[0.92] contrast-[0.9] dark:invert-0 dark:grayscale-0 dark:opacity-80"
      />
    </div>
  );
}
