import type { Resource } from "../types/Resource";
import ResourceCard from "./ResourceCard";

type ResourceGridProps = {
  resources: Resource[];
};

const ResourceGrid = ({ resources }: ResourceGridProps) => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </section>
  );
};

export default ResourceGrid;
