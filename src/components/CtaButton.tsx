import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent";
  external?: boolean;
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "accent",
  external = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded-full px-8 py-4 text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5";
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    accent: "bg-accent hover:bg-accent-dark text-white",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
