/**
 * Forma de um bloco de prosa das páginas internas.
 *
 * Vive na camada de conteúdo, e não no componente que o renderiza, porque é o
 * conteúdo que define a estrutura: parte do material entregue pela
 * profissional veio em tópicos, e achatar essa lista em um parágrafo corrido
 * perderia a leitura por varredura que ela desenhou.
 *
 * A forma `string` continua válida para os blocos que são um parágrafo só.
 */
export type ProseSection = {
  /** Parágrafos exibidos antes da lista. */
  paragraphs: string[];
  /** Tópicos, quando o conteúdo original veio em lista. */
  bullets?: string[];
  /** Parágrafos exibidos depois da lista. */
  afterBullets?: string[];
};
