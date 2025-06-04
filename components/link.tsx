import { isExternalLink } from "@/lib/utils";
import React from "react";
import NextLink from "next/link";

export function Link({
  href = "#",
  ...props
}: {
  href: string;
  className?: string;
}) {
  const isExternal = isExternalLink(href);
  if (isExternal) {
    return (
      <a
        href={href + "?ref=onur.dev"}
        target="_blank"
        rel="noopener noreferrer"
        className="link break-words after:content-['_↗']"
        {...props}
      />
    );
  }

  return <NextLink href={href} className="link" {...props} />;
}
