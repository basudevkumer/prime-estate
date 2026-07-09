import { AgentCard } from "./agent-card";
import { InquiryForm } from "./inquiry-form";

export function PropertySidebar() {
  return (
    <aside
      className="
      lg:sticky
      lg:top-28
      "
    >
      <AgentCard />

      <InquiryForm />
    </aside>
  );
}