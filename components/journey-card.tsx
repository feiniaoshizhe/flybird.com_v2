// components/JourneyCard.tsx
"use client";
import dynamic from "next/dynamic";
import { memo } from "react";

const MarkdownRenderer = dynamic(() =>
  import("@/components/markdown-renderer").then((mod) => mod.MarkdownRenderer)
);

interface ImageProps {
  url: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
}

interface JourneyCardProps {
  title: string;
  description?: string;
  image?: ImageProps;
  index: number;
}

export const JourneyCard = memo(
  ({ title, description, image, index }: JourneyCardProps) => {
    return (
      <div className="word-break-word flex flex-col">
        <span className="mb-px font-semibold tracking-tight">{title}</span>

        {description && (
          <MarkdownRenderer
            className="text-sm"
            options={{
              forceInline: true,
            }}
          >
            {description}
          </MarkdownRenderer>
        )}

        {image?.url && (
          <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
            <img
              src={image.url}
              alt={image.title || image.description || "Journey image"}
              width={image.width}
              height={image.height}
              loading={index < 1 ? "eager" : "lazy"}
              className="animate-reveal"
              data-nopin="nopin" // Use valid custom attribute for HTML
            />
          </div>
        )}
      </div>
    );
  }
);

JourneyCard.displayName = "JourneyCard";
