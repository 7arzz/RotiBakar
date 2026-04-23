/**
 * Inline SVG icon components to replace lucide-react dependency.
 * Each icon matches the lucide-react API: size, className, strokeWidth, fill props.
 */

const defaultProps = {
  size: 24,
  strokeWidth: 2,
  fill: "none",
  className: "",
};

const Icon = ({ size, strokeWidth, fill, className, children, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...rest}
  >
    {children}
  </svg>
);

export function ChevronDown({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  );
}

export function Flame({ size = 24, strokeWidth = 2, fill = "none", className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} fill={fill} className={className} {...rest}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </Icon>
  );
}

export function MapPin({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function Clock({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Icon>
  );
}

export function Star({ size = 24, strokeWidth = 2, fill = "none", className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} fill={fill} className={className} {...rest}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a.53.53 0 0 0 .4.29l5.16.756a.53.53 0 0 1 .294.904l-3.733 3.638a.53.53 0 0 0-.152.469l.882 5.14a.53.53 0 0 1-.77.56l-4.614-2.426a.53.53 0 0 0-.494 0L6.144 18.73a.53.53 0 0 1-.77-.56l.882-5.14a.53.53 0 0 0-.152-.469L2.37 8.924a.53.53 0 0 1 .294-.904l5.16-.756a.53.53 0 0 0 .4-.29z" />
    </Icon>
  );
}

export function Instagram({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </Icon>
  );
}

export function MessageCircle({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
    </Icon>
  );
}

export function Phone({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

export function Heart({ size = 24, strokeWidth = 2, fill = "none", className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} fill={fill} className={className} {...rest}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
    </Icon>
  );
}

export function CreditCard({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </Icon>
  );
}

export function Send({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </Icon>
  );
}

export function ShoppingBag({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </Icon>
  );
}

export function Trash2({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </Icon>
  );
}

export function X({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  );
}

export function Plus({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </Icon>
  );
}

export function Check({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  );
}

export function Sparkles({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </Icon>
  );
}

export function CheckCircle2({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}

export function AlertTriangle({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </Icon>
  );
}

export function Info({ size = 24, strokeWidth = 2, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className} {...rest}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </Icon>
  );
}
