import { useOutletContext } from "react-router-dom";
import { Van } from "../types/api-responses";

export type ContextType = { van: Van | null };

export function useVan() {
  return useOutletContext<ContextType>();
}
