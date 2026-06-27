import { durations } from "./durations";
import { easings } from "./easings";

export const transitions = {
  default: `all ${durations.normal} ${easings.easeInOut}`,

  fast: `all ${durations.fast} ${easings.easeOut}`,

  slow: `all ${durations.slow} ${easings.easeInOut}`,
} as const;