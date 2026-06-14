import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 md:p-8 rounded-lg border border-border hover:border-foreground transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 ${
        featured ? 'md:col-span-2 bg-secondary/50' : 'bg-background'
      }`}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-foreground transition-all duration-300 ease-out">
              {title}
            </h3>
          </div>
          <Github
            size={24}
            className="text-muted-foreground group-hover:text-foreground transition-all duration-300 ease-out flex-shrink-0 mt-1"
          />
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-border text-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 ease-out pt-2">
          <span>{featured ? 'Featured Project' : 'View on GitHub'}</span>
          <ExternalLink size={16} />
        </div>
      </div>
    </a>
  );
}
