import { StoryStatus } from "@/types/stories";

export const storyStatusText: Record<StoryStatus, string> = {
  draft: 'Draft',
  live: 'Live',
  past: 'Past',
  scheduled: 'Scheduled',
};
