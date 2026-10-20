import { Typewriter } from "../ui";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  titleSpeed?: number;
  titleStartDelay?: number;
  className?: string;
}

export function SectionTitle({ 
  label, 
  title, 
  subtitle, 
  titleSpeed = 25, 
  titleStartDelay = 200,
  className = "" 
}: SectionTitleProps) {
  return (
    <div className={className}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">
        <Typewriter
          text={title}
          speed={titleSpeed}
          startDelay={titleStartDelay}
          prompt="user@portfolio:~$ "
          cursor={true}
        />
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}