import { ReactNode } from "react";

import { Card } from "./Card";

interface FeatureCardProps {
  icon: ReactNode;

  title: string;

  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-4 text-3xl text-blue-400">{icon}</div>

      <h3 className="heading-3 font-heading">{title}</h3>

      <p className="body-text text-slate-400 mt-3">{description}</p>
    </Card>
  );
}
