/**
 * Renders operator-supplied copy as a visible, findable token.
 * Accepts either a string child or the {p: "..."} objects used in lib/content.js.
 */
export default function Placeholder({ children }) {
  const text =
    children && typeof children === "object" && "p" in children ? children.p : children;
  return <span className="ph">[{text}]</span>;
}

/**
 * <Ph value={x} />: if x is a real string, print it; if it's a {p:"..."}
 * placeholder object, print the findable token instead.
 */
export function Ph({ value }) {
  if (value && typeof value === "object" && "p" in value) {
    return <Placeholder>{value}</Placeholder>;
  }
  return <>{value}</>;
}
