import "../../styles/demo-card.css";

import { ReactNode } from "react";

interface DemoCardProps {
  title: string;
  description: string;
  children: ReactNode;
  status?: "stable" | "beta";
}

export function DemoCard({
  title,
  description,
  children,
  status = "stable",
}: DemoCardProps) {
  return (
    <section className="demo-card">
      <div className="demo-card__header">
        <div>
          <h2 className="demo-card__title">
            {title}
          </h2>

          <p className="demo-card__description">
            {description}
          </p>
        </div>

        <span className="demo-card__badge">
          {status === "stable" ? "Stable" : "Beta"}
        </span>
      </div>

      <div className="demo-card__body">
        {children}
      </div>
    </section>
  );
}