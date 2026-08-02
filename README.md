# Arkyo

Site institucional multilíngue da Arkyo, construído com React, TanStack Start, Tailwind CSS e Framer Motion.

## Desenvolvimento

- Instale as dependências com Bun: `bun install`
- Inicie o ambiente local: `bun run dev`
- Execute a validação completa: `bun run lint && bun run typecheck && bun run test && bun run build`

## Publicação na Vercel

Importe o repositório na Vercel e mantenha a detecção automática do framework TanStack Start. O preset Nitro para Vercel já está configurado em `vite.config.ts`; não defina manualmente Build Command nem Output Directory.

A variável `VITE_SITE_URL` é opcional até o domínio final ser conectado. Quando configurada, deve conter a URL canônica pública, por exemplo `https://arkyo.co`.

## Estrutura principal

- `src/components/site`: seções da página e navegação
- `src/data`: dados comerciais e conteúdo estruturado
- `src/i18n`: traduções em português, inglês e francês
- `src/routes`: páginas, sitemap e metadados
- `public`: imagens, favicon e arquivos de SEO

Os contatos comerciais abrem o WhatsApp com uma mensagem pré-preenchida e editável; nenhuma mensagem é enviada automaticamente.
