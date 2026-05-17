type Props = {
  tag?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  sub?: string;
  className?: string;
};

export function SectionHeading({ tag: Tag = "h2", children, sub, className = "" }: Props) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <Tag className="text-2xl md:text-3xl font-bold text-foreground">{children}</Tag>
      {sub && <p className="mt-2 text-muted text-sm md:text-base">{sub}</p>}
    </div>
  );
}
