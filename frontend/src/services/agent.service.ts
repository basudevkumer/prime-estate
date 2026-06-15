import { agents } from "@/data/agents";

export const agentService = {
  async getAll() {
    return Promise.resolve(
      agents
    );
  },

  async getById(id: string) {
    return Promise.resolve(
      agents.find(
        agent =>
          agent.id === id
      )
    );
  },
};