# Busato Marcenaria — site institucional

Este pacote contém uma versão **front-end completa, responsiva e pronta para publicar em GitHub Pages**.

## O que já está funcionando
- Home premium responsiva.
- Logo fornecida pela empresa, isolada em `assets/logo.png`.
- Hero, diferenciais, portfólio com filtros, modal de projeto e galeria.
- Catálogo de soluções.
- Processo em timeline.
- Sobre a marcenaria.
- Comparador visual Antes x Depois.
- Depoimentos.
- Blog/inspiração.
- Formulário de orçamento em 7 etapas.
- Upload e pré-visualização de várias imagens no navegador.
- Geração automática de mensagem para WhatsApp.
- Formulário de contato.
- Botão flutuante de WhatsApp.
- Área administrativa demonstrativa em `#admin`.
- Dados dos formulários armazenados em `localStorage` e exportáveis em JSON.
- Estrutura preparada para substituição futura por API + banco de dados.

## Publicação rápida
1. Envie todo o conteúdo desta pasta para um repositório GitHub.
2. Ative GitHub Pages apontando para a raiz do repositório.
3. Abra o endereço fornecido pelo GitHub.

## Importante sobre o backend
GitHub Pages é hospedagem estática. Portanto, o formulário desta versão funciona como demonstração local e salva solicitações no navegador. Para uso comercial real, conecte o formulário a um backend (por exemplo, Supabase, Firebase ou uma API própria) e implemente autenticação real para o painel administrativo.

O botão de WhatsApp já usa o número presente na logo: **(42) 99849-0559**. Caso o número comercial mude, altere a constante `whatsapp` em `app.js` e os links `wa.me` em `index.html`.

## Imagens
As imagens demonstrativas são carregadas do Unsplash por URL. Substitua-as pelas fotos reais dos projetos da Busato para aumentar autenticidade e conversão.

## Próximas etapas recomendadas para produção
- Domínio próprio.
- Google Business Profile e mapa real.
- Instagram/Facebook oficiais.
- Supabase/Firebase para banco de dados, Storage e autenticação.
- Envio de e-mail para cada novo orçamento.
- Status real dos orçamentos.
- CMS para projetos, produtos e blog.
- Sitemap.xml, robots.txt e Schema.org LocalBusiness.
- Compressão/WebP/AVIF das fotos reais.
