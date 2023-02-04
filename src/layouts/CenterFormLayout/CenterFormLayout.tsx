import { ReactNode } from "react";
import styles from "./CenterFormLayout.module.scss";

interface CenterFormLayoutProps {
  children: ReactNode;
}

export function CenterFormLayout({ children }: CenterFormLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>{children}</section>
    </div>
  );
}
