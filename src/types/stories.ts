export type StoryStatus = 'draft' | 'scheduled' | 'live' | 'past';

export interface Story {
  id: string;
  title: string;
  pages: string[]; // Just urls for images
  liveFrom?: number;
  ends?: number;
  lastModified: number;
  status: StoryStatus;
}
