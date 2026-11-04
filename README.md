# Dr. Clenilson: Hopeful Paths

Crie uma landing page para o Dr. Clenilson Júnior, médico psiquiatra.

O QUE NÃO FAZER: não use fundo creme com serifada de alto contraste e acento

terracota; não use preto puro com verde ácido; não use layout de jornal com fios

finos e colunas densas. Nada de foto de banco de imagens, nada de gradiente roxo,

nada de ícone de cérebro com circuito.

PÚBLICO

Quem lê esta página na maioria das vezes é a FAMÍLIA, não o paciente: mãe, esposa,

irmão, exaustos depois de muitas tentativas, carregando vergonha e medo de

julgamento. A página existe para tirar esse peso e fazer a pessoa mandar a

primeira mensagem hoje.

FOTOS (anexadas)

hero-clenilson.jpg  -> Hero. Retrato formal, camisa branca, postura aberta,

                       sorriso natural. Recortar do fundo e posicionar sobre a

                       cor base. Preservar a silhueta do ombro e do braço:

                       a camisa é branca sobre fundo claro e o recorte tende a

                       comer a borda.

sobre-clenilson.jpg -> seção "Quem é". Sentado à mesa, terno, contexto de consulta.

Não use nenhuma outra imagem de pessoa. Nada de banco de imagens.

IDENTIDADE

Tokens de cor, exatamente estes:

  ameixa #2A1E2E (base escura), ameixa-claro #4A3652 (superfície elevada),

  areia #E8E1D6 (seções claras), ambar #D98E3A (acento único),

  tinta #1A1319 (texto sobre claro), musgo #5F6B54 (ícones de apoio).

O âmbar é o ÚNICO acento e aparece pouco: CTAs, a linha da assinatura e no

máximo uma palavra por seção.

Tipografia via Google Fonts:

  Bricolage Grotesque em títulos e logo.

  Newsreader em TODO o corpo, 17px mobile e 18px desktop.

  Azeret Mono só em olhos de seção, credenciais e rodapé.

Aplicar globalmente no tema.

Espaçamento 4/8/12/16/24/32/48/64/96. Hierarquia por peso e cor, não por tamanho.

Espaço entre seções maior que dentro da seção.

Animação: só fade e translate de até 12px, 200 a 400ms, ease-out.

prefers-reduced-motion obrigatório. Sem parallax.

ESTRUTURA

1. NAVBAR

Fixa, transparente sobre o hero e ameixa sólido ao rolar. À esquerda

"Dr. Clenilson Júnior" em Bricolage. À direita botão âmbar arredondado

"Falar com o consultório".

2. HERO

Fundo ameixa. Texto à esquerda (55%), foto recortada à direita (45%),

sangrando até a base da seção.

Olho em Azeret Mono, âmbar, maiúsculas espaçadas: PSIQUIATRIA

H1 em Bricolage, areia, peso 600, line-height 1.05:

  "Quando a família chega aqui, já tentou de tudo."

Subtítulo em Newsreader, areia a 80%:

  "Atendimento psiquiátrico para transtornos de personalidade, dependência

  química e alcoolismo. Um plano que aguenta recaída, porque recaída faz parte."

Botão âmbar grande com ícone do WhatsApp: "Falar com o consultório"

Abaixo, Azeret Mono pequeno:

  "Dr. Clenilson Júnior · CRM-MA [PREENCHER] · [CIDADE]"

3. O QUE VOCÊ JÁ DEVE TER OUVIDO

Fundo areia. Quatro frases de julgamento em cartões baixos, sem ícone, texto

grande em Newsreader itálico, como aspas soltas:

  "É só ele querer parar."

  "Isso é falta de vergonha na cara."

  "Ela faz isso pra chamar atenção."

  "Já tentamos de tudo, não adianta."

Abaixo, uma linha em Bricolage, tinta:

  "Nenhuma dessas frases já tirou alguém de onde está."

4. O QUE EU TRATO

Fundo ameixa. Quatro blocos com PESOS DIFERENTES, não um grid igual:

  Grande: Transtornos de personalidade, com destaque para borderline

  Grande: Dependência química e alcoolismo

  Menor: Depressão

  Menor: Ansiedade

Os dois primeiros ocupam o dobro de área. Isso é informação, mostra onde está

a especialidade real.

5. COMO FUNCIONA  <- ELEMENTO-ASSINATURA

Fundo areia. Um traço vertical contínuo em âmbar, em SVG, ligando as etapas.

Entre a etapa 3 e a 4 a linha VOLTA PARA TRÁS uma vez e depois segue.

Ao lado do desvio, rótulo pequeno em Azeret Mono: "recaída".

Etapas: Primeira conversa / Avaliação e diagnóstico / Plano de tratamento /

Acompanhamento

Fechamento em Bricolage:

  "A linha volta porque o tratamento aguenta. Recair não tira ninguém daqui."

A linha desenha progressivamente ao entrar na viewport, 600ms, e aparece

completa se prefers-reduced-motion estiver ativo.

6. QUEM É O DR. CLENILSON

Fundo ameixa-claro. sobre-clenilson.jpg à esquerda, texto à direita, primeira

pessoa, Newsreader, conversado. Nada de "excelência" ou "referência".

7. PERGUNTAS QUE A FAMÍLIA FAZ

Fundo areia, acordeão:

  "Ele não aceita se tratar. Posso ir na consulta sem ele?"

  "Isso tem cura?"

  "Vai precisar internar?"

  "Quanto tempo demora pra melhorar?"

  "Vocês atendem por convênio?"

8. CONTATO

Fundo ameixa. Endereço, mapa, horários, botão âmbar.

9. RODAPÉ + BOTÃO FLUTUANTE

Rodapé em Azeret Mono com CRM e responsável técnico.

Botão flutuante do WhatsApp, âmbar, canto inferior direito, com respiro para

nunca cobrir CTA.

Todos os CTAs abrem wa.me/[NUMERO] com:

"Olá, vim pelo site e quero agendar uma consulta com o Dr. Clenilson."

Acessibilidade: contraste AA em todo texto, foco visível no teclado, alt em

todas as imagens. Nunca opacidade abaixo de 70% em texto pequeno.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dr-clenilson-care-connect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cc748567-de29-43db-8bdd-9b0cc2528172).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
