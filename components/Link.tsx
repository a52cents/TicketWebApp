import { usePageContext } from "vike-react/usePageContext";
import { ReactNode } from "react";

export function Link({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  const linkClassName = `${isActive ? "is-active" : ""} ${
    className || ""
  }`.trim();

  return (
    <a href={href} className={linkClassName || undefined}>
      {children}
    </a>
  );
}
