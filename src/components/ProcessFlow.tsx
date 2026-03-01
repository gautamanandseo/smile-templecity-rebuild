import { ProcessStep } from "@/data/services";

interface ProcessFlowProps {
  steps: ProcessStep[];
}

export const ProcessFlow = ({ steps }: ProcessFlowProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 h-full border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mt-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
