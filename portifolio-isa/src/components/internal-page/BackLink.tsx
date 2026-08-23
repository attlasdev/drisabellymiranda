import Link from "next/link";

import { ArrowUpIcon } from "@/components/icons/ArrowUpIcon";

import styles from "./back-link.module.css";

type BackLinkProps = {
  href: string;
  label: string;
};

/*
  Link discreto de retorno do topo das páginas internas.

  O destino é sempre absoluto: as âncoras da home não existem nestas rotas.
  Reaproveita a seta vertical aprovada, girada, em vez de introduzir um ícone
  novo no sistema.
*/
export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link className={styles.back} href={href}>
      <ArrowUpIcon className={styles.icon} size={16} aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
