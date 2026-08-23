import Image from "next/image";

import { BackLink } from "@/components/internal-page/BackLink";
import type { TrajectoryPhoto } from "@/content/trajetoria";

import styles from "./trajectory-header.module.css";

type TrajectoryHeaderProps = {
  eyebrow: string;
  name: string;
  opening: string;
  photo: TrajectoryPhoto | null;
  photoPendingLabel: string;
};

export function TrajectoryHeader({
  eyebrow,
  name,
  opening,
  photo,
  photoPendingLabel,
}: TrajectoryHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Destino absoluto: esta rota não tem as âncoras da home. */}
        <BackLink href="/" label="Voltar para o início" />

        <div className={styles.composition}>
          {/*
            Cápsula na proporção 7 / 9, a mesma da fotografia da Seção 4.
            Enquanto a foto real não chega, a área se anuncia como pendente em
            vez de sumir ou virar uma caixa cinza sem explicação. Quando a
            imagem entrar, o layout não muda.
          */}
          <div className={styles.capsule}>
            {photo ? (
              <Image
                className={styles.photo}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 47.999rem) 78vw, 22rem"
              />
            ) : (
              <div className={styles.pending}>
                <span className={styles.pendingMark} aria-hidden="true">
                  IM
                </span>
                <p className={styles.pendingLabel}>{photoPendingLabel}</p>
              </div>
            )}
          </div>

          <div className={styles.text}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.opening}>{opening}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
