# Proposta Shimada

## Escopo confirmado

Ambos os planos incluem 3 vídeos por semana, além de criativos próprios para anúncios. Em gravações distantes, Evandro Sanches acompanha a equipe da Shimada ou a empresa repassa o valor do transporte, combinado antes da viagem. A quantidade de visitas não foi fixada. Condições de pagamento e data de envio ainda precisam ser preenchidas.

`npm start` inicia a prévia local e `npm test` executa as verificações. Para hospedagem estática, publicar `index.html`, `styles.css`, `visual.css`, `app.js`, `experience.js`, `visual.js` e `config.js`. GitHub armazena o código; a hospedagem pública é uma etapa separada. Perfis temporários de navegador, logs e arquivos de ambiente são excluídos pelo `.gitignore`.

## Facebook, acompanhamento e site

WhatsApp da agência configurado: 5543988634275. Exemplo visual de anúncio no Facebook, painel próprio com atualização diária previsto nos dois planos, e explicação visual do remarketing. O painel exibido é uma demonstração com números fictícios, não uma integração ativa; sua implantação faz parte do serviço proposto. O exemplo de anúncio direciona para Evandro Sanches, não para a Shimada. A proposta não instala rastreadores. Públicos de visitantes dependem de elegibilidade, consentimento, volume e configurações da plataforma, sem promessa de rastrear ou alcançar todos. A página oficial da Meta sobre remarketing exigiu login na consulta realizada.

## Revisão de narrativa visual

Painel de responsabilidades (Shimada / Evandro Sanches), celular interativo com busca, conteúdo e conversa, conceitos de Reels ilustrados em SVG com rolagem por toque e caminho visual de início. Simulações identificadas, sem fotos ou resultados inventados. `visual.js` e `visual.css` complementam a apresentação. `node verify.cjs` verifica preços, âncoras e estados da demonstração. A captura automática no Edge falhou por indisponibilidade de GPU no ambiente; revisão visual real no dispositivo permanece pendente.

## Servidor local e revisão atual

Execute `node server.js` e acesse http://127.0.0.1:4173. Servidor Node sem dependências. A interface usa JavaScript para explorar os canais do plano, navegar no carrossel e alternar entre investimento mensal e total. Arquivos são servidos em UTF-8 sem cache.

Plano Completo atualizado: gestão R$ 900/mês, mídia sugerida R$ 900/mês e site R$ 750 uma única vez. Serviços em 3 meses: R$ 3.450; mídia: R$ 2.700; total: R$ 6.150. Essencial permanece R$ 800/mês mais mídia. Tipografia unificada em Inter, com fallback Arial. Estrutura abstrata substituída por uma demonstração interativa dos canais e de sua função.

Primeira versão local, estática e sem dependências de instalação. Abra `index.html` no navegador. Os arquivos podem ser hospedados em qualquer serviço estático depois da revisão.

## Completar antes de enviar

Edite `config.js`:
- `whatsapp`: número **do Evandro Sanches/agency**, com 55 e DDD. O telefone do briefing pertence à Shimada e não foi usado como destino.
- `dataEnvio`: data real de envio, AAAA-MM-DD. A página calcula validade de 7 dias a partir dela; não renova ao abrir.
- `pagamento`, `entregasMensais`, `visitasMensais`, `prazoResposta`: condições confirmadas. Campos vazios não aparecem.

Confirmar nome comercial, viabilidade do escopo de Google dentro dos R$ 900, quantidades de conteúdo, visitas, prazos, pagamentos, domínio e hospedagem do site oferecido. IA está sob consulta. Reunião mensal ainda não foi prometida.

Sem número configurado, os botões vão ao encerramento e informam que o contato estará disponível na versão final. Não enviar ao cliente nessa condição.

## Conteúdo

Diagnóstico baseado exclusivamente no levantamento fornecido pelo usuário, datado de 07/11/2026; não houve pesquisa independente. Dados sensíveis de avaliações não foram expostos. Concorrência foi resumida sem nomes nem promessa de ultrapassar concorrentes. O Google foi apresentado como canal que pode ser complementado por site, sem alegar que exige site para converter.

Completo: R$ 2.700 gestão + R$ 750 site + R$ 2.700 mídia = R$ 6.150 em 3 meses. Essencial: Meta; Completo: Meta e Google com distribuição a definir. CTA Essencial e dúvida têm mensagens específicas para respeitar a intenção do visitante; os demais usam a mensagem solicitada para o Completo.

## Visual e publicação

Sem fotos externas, logos copiados ou depoimentos. A marca no topo é tipográfica provisória e o desenho de estrutura é CSS. O mapa é um diagrama sem escala, identificado como ilustrativo. Substituir/acrescentar logo e fotos quando fornecidos e autorizados.

Fontes do Google Fonts com fallback local. Metatags de título e descrição estão prontas. Após definir o endereço de hospedagem, acrescentar `og:url` e, se desejado, uma imagem própria `og:image` com URL absoluta. Prévia no WhatsApp depende também do cache e do acesso público à URL.

Movimento reduzido respeitado. Conteúdo permanece legível sem JavaScript. Sem formulário, rastreadores ou biblioteca de animação. Ainda não publicado.

## Revis?o visual
Paleta revisada: branco, preto e azul discreto, sem verde/grafite. Carrossel de evolu??o com toque, setas e teclado, sem reprodu??o autom?tica. Estrutura com movimento flutuante, entrada suave de elementos e cart?es com resposta ao hover. Prefer?ncia por movimento reduzido preservada.
