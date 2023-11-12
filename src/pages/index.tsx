import { StoriesTable } from "@/components/stories/stories-table";
import { fetchStories } from "@/requests/stories";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, fetchStatus, error } = useQuery({
    queryKey: ['stories'],
    queryFn: fetchStories,
  })

  if (fetchStatus === 'fetching') {
    return <span>Loading...</span>
  }

  if (data === undefined) {
    return null;
  }

  if (error) {
    return <span>There was an error</span>;
  }

  return <StoriesTable stories={data} />;
}
