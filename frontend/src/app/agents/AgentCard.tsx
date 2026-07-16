"use client";

import Image from "next/image";
import { RiStarFill, RiMailLine, RiPhoneLine } from "react-icons/ri";
import { Agent } from "@/types";
import { Card } from "@/components/ui/Card";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="p-6 text-center group cursor-pointer transition-all duration-500 hover:-translate-y-2">
      {/* Avatar */}
      <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden ring-2 ring-blue-500/30 group-hover:ring-blue-500/60 transition-all duration-500">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name & Role */}
      <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-400 transition">
        {agent.name}
      </h3>
      <p className="text-slate-400 text-sm">{agent.role}</p>

      {/* Rating */}
      <div className="mt-3 flex items-center justify-center gap-1 text-yellow-400">
        <RiStarFill />
        <span className="text-white text-sm font-medium">{agent.rating}</span>
        <span className="text-slate-500 text-sm">
          ({agent.soldProperties} sold)
        </span>
      </div>

      {/* Bio */}
      <p className="mt-3 text-slate-400 text-sm line-clamp-2">{agent.bio}</p>

      {/* Contact Info */}
      <div className="mt-4 space-y-2">
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition"
        >
          <RiMailLine />
          {agent.email}
        </a>
        <a
          href={`tel:${agent.phone}`}
          className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition"
        >
          <RiPhoneLine />
          {agent.phone}
        </a>
      </div>
    </Card>
  );
}
