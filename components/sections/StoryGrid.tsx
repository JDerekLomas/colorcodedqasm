import { StoryCard } from "@/components/cards/StoryCard";
import type { Story } from "@/lib/types";

interface StoryGridProps {
  stories: Story[];
  title?: string;
}

export function StoryGrid({ stories, title }: StoryGridProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl font-semibold mb-8 lowercase">{title}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
