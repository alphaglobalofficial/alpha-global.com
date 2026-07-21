import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.15" cy="6.85" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7.6" cy="8" r="1.35" fill="currentColor" />
      <rect x="6.55" y="10.6" width="2.1" height="7.1" rx="0.4" fill="currentColor" />
      <path
        d="M11.6 10.6h2.1v1.1c.5-.85 1.35-1.35 2.45-1.35 2 0 3 1.35 3 3.7v4.1h-2.1v-3.7c0-1.15-.4-1.95-1.5-1.95-.85 0-1.35.6-1.6 1.1-.1.25-.1.5-.1.85v3.7h-2.1V10.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 4.5 18.5 19.5M18.5 4.5 5 19.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.6 21v-6.4h2.15l.32-2.5H13.6v-1.6c0-.72.2-1.22 1.24-1.22h1.32V7.06c-.23-.03-1-.1-1.9-.1-1.9 0-3.2 1.16-3.2 3.28v1.83H8.9v2.5h2.16V21"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.82.487 3.6 1.412 5.164L2 22l4.928-1.393A9.947 9.947 0 0012.001 22c5.523 0 10-4.477 10-10S17.524 2 12 2zm0 18.077a8.05 8.05 0 01-4.396-1.293l-.315-.19-3.155.893.869-3.079-.207-.318A8.045 8.045 0 013.923 12c0-4.462 3.617-8.077 8.078-8.077 4.462 0 8.077 3.615 8.077 8.077 0 4.462-3.615 8.077-8.077 8.077z" />
    </svg>
  );
}
