import { PublicFooter } from "@/components/public-footer";
import { PublicHeader } from "@/components/public-header";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </>
  );
}
