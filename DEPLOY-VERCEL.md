# Deploy na Vercel

Este repositório contém o aplicativo Next.js na pasta `portifolio-isa`. A
seleção dessa pasta como diretório raiz é a configuração essencial para o
deploy.

## Importação inicial

1. Na Vercel, importe o repositório `attlasdev/drisabellymiranda`.
2. Em **Root Directory**, clique em **Edit** e selecione `portifolio-isa`.
3. Confirme o **Framework Preset** como `Next.js`.
4. Não ative overrides para **Build Command**, **Output Directory** ou
   **Install Command**. A detecção automática utilizará `npm run build`, `.next`
   e o `package-lock.json` do projeto.
5. Não cadastre variáveis de ambiente: a versão atual não depende de nenhuma.
6. Confirme Node.js `22.x`. O `package.json` também fixa essa versão.
7. Clique em **Deploy**.

## Depois do primeiro deploy

- Confira a página inicial, `/trajetoria` e as páginas em `/tratamentos/...`.
- Só conecte o domínio definitivo depois de aprovar o conteúdo clínico e
  substituir os textos ainda marcados como provisórios no código.
- A branch de produção deve permanecer como `main`.
- Cada novo push para `main` criará automaticamente um novo deploy de produção.

## Validação local equivalente

Dentro de `portifolio-isa`, execute:

```powershell
npm ci
npm run lint
npm run build
```

O build deve terminar sem erros antes de fazer push para a branch `main`.
