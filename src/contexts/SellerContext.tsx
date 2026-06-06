import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getCurrentSeller,
  logoutSeller as logoutSellerLib,
  type Seller,
} from "@/lib/sellers";

interface SellerContextValue {
  seller: Seller | null;
  /** Re-read seller/products/inquiries from storage. */
  refresh: () => void;
  logout: () => void;
}

const SellerContext = createContext<SellerContextValue | null>(null);

export function SellerProvider({ children }: { children: ReactNode }) {
  const [seller, setSeller] = useState<Seller | null>(null);

  const refresh = useCallback(() => {
    setSeller(getCurrentSeller());
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const logout = useCallback(() => {
    logoutSellerLib();
    setSeller(null);
  }, []);

  return (
    <SellerContext.Provider value={{ seller, refresh, logout }}>
      {children}
    </SellerContext.Provider>
  );
}

export function useSeller() {
  const ctx = useContext(SellerContext);
  if (!ctx) throw new Error("useSeller must be used within SellerProvider");
  return ctx;
}
