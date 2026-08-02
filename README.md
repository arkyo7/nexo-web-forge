# Arkyo

Site institucional multil\u00EDngue da Arkyo, constru\u00EDdo com React, TanStack Start, Tailwind CSS e Framer Motion.

## Desenvolvimento

- Instale as depend\u00EAncias com Bun: \`bun install\`
- Inicie o ambiente local: \`bun run dev\`
- Execute a valida\u00E7\u00E3o completa: \`bun run lint && bun run typecheck && bun run test && bun run build\`

## Publica\u00E7\u00E3o na Vercel

Importe o reposit\u00F3rio na Vercel e mantenha a detec\u00E7\u00E3o autom\u00E1tica do framework TanStack Start. O preset Nitro para Vercel j\u00E1 est\u00E1 configurado em \`vite.config.ts\`; n\u00E3o defina manualmente Build Command nem Output Directory.

A vari\u00E1vel \`VITE_SITE_URL\` \u00E9 opcional at\u00E9 o dom\u00EDnio final ser conectado. Quando configurada, deve conter a URL can\u00F4nica p\u00FAblica, por exemplo \`https://arkyo.co\`.

## Estrutura principal

- \`src/components/site\`: se\u00E7\u00F5es da p\u00E1gina e navega\u00E7\u00E3o
- \`src/data\`: dados comerciais e conte\u00FAdo estruturado
- \`src/i18n\`: tradu\u00E7\u00F5es em portugu\u00EAs, ingl\u00EAs e franc\u00EAs
- \`src/routes\`: p\u00E1ginas, sitemap e metadados
- \`public\`: imagens, favicon e arquivos de SEO

Os contatos comerciais abrem o WhatsApp com uma mensagem pr\u00E9-preenchida e edit\u00E1vel; nenhuma mensagem \u00E9 enviada automaticamente.
