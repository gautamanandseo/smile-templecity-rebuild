import { Zap } from "lucide-react";

interface TechnologyGridProps {
  technologies: string[];
}

export const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-all"
          >
            <div className="flex-shrink-0 mt-0.5">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">{tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
