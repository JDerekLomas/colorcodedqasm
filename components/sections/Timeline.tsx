import Image from "next/image";
import type { TimelineStep } from "@/lib/types";

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex gap-6 items-start">
            {/* Timeline Line & Icon */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Image
                  src={step.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-full bg-amber-200 mt-2 min-h-[60px]" />
              )}
            </div>

            {/* Content */}
            <div className="pb-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-amber-600">
                  {step.days}
                </span>
                <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
