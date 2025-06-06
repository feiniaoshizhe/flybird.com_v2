"use client";
import * as React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import RemarkMath from "remark-math";
import RemarkBreaks from "remark-breaks";
import RehypeKatex from "rehype-katex";
import { Link } from "@/components/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { CodeProps } from "react-markdown/lib/code";
// import { TweetCard } from "@/components/tweet-card/tweet-card";

interface IMarkdownProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer = React.forwardRef(
  (
    { content, className }: IMarkdownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={`${className}`} ref={ref}>
        <Markdown
          remarkPlugins={[remarkGfm, RemarkMath, RemarkBreaks]}
          rehypePlugins={[RehypeKatex]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold my-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold my-3" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="my-2 leading-relaxed" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img
                className="my-4 rounded-md shadow-sm"
                loading="lazy"
                alt={props.alt || ""}
                {...props}
              />
            ),
            code(props) {
              const { children, className, node, style, ref, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  style={atomOneDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-md my-4"
                  showLineNumbers
                  {...rest}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    );
  }
);
