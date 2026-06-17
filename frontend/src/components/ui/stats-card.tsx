import { Card } from "./card";

interface StatsCardProps {
  value: string;

  label: string;
}

export function StatsCard({
  value,
  label,
}: StatsCardProps) {
  return (
    <Card className="p-6 text-center">
      <h3
        className="
        display
        text-gradient
        font-heading
      "
      >
        {value}
      </h3>

      <p
        className="
        body-text
        text-slate-400
        mt-2
      "
      >
        {label}
      </p>
    </Card>
  );
}