import { AgentCard } from "./AgentCard";
import { InquiryForm } from "./InquiryForm";

export function PropertySidebar() {
  return (
    <aside className="lg:sticky lg:top-28">
      <AgentCard />

      <InquiryForm />
    </aside>
  );
}
