/*
  Emite JSON-LD no HTML renderizado no servidor.

  Precisa ser server component: o Google processa dados estruturados injetados
  por JavaScript com atraso, então markup que depende de hidratação perde o
  sentido. Como todas as rotas do site são estáticas, o script já sai pronto
  no primeiro byte.
*/
type JsonLdProps = {
  data: unknown;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // O conteúdo é montado por nós a partir do próprio `src/content`, nunca
      // de entrada externa. `</` é escapado para não fechar o script antes da hora.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
