import Image from "next/image";

import {
  RiPhoneLine,
  RiMailLine,
} from "react-icons/ri";

export function AgentCard() {
  return (
    <div className="glass-card rounded-[32px] p-8">
      <div className="flex items-center gap-5">
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
          alt="Agent"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-2xl font-semibold">
            James Anderson
          </h3>

          <p className="text-slate-400">
            Senior Property Consultant
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <RiPhoneLine />

          <span>+1 (555) 987-6543</span>
        </div>

        <div className="flex items-center gap-3">
          <RiMailLine />

          <span>
            james@primeestate.com
          </span>
        </div>
      </div>
    </div>
  );
}