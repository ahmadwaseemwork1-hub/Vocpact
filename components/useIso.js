import { useLayoutEffect, useEffect } from "react";

// Avoids the SSR useLayoutEffect warning while keeping sync layout on the client.
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
