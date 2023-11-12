import { Story } from "@/types/stories"

export const fetchStories = async (): Promise<Story[]> => {
  return await fetch('/api/stories').then(res => res.json())
}
