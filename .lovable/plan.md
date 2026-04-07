## Plan: Add 20 New "Data-Driven" Slides Module

### Overview

Add a complete new module of 20 slides about "Dados - O Segredo para o Sucesso Empresarial" between the existing `SlideOfertasServicos` and `SlideCoverInfra` slides. The slides will follow the existing visual identity (dark mode, gradients, glassmorphism, animations) and use the reference images provided.

### Implementation Strategy: 4 Stages

Due to the volume (20 slides), implementation will be done in 4 stages:

---

### Stage 1: Slides 1-5 (Foundation)

1. **SlideDadosCapa.tsx** - Cover slide with title "DADOS, O SEGREDO PARA O SUCESSO EMPRESARIAL", NuageLogo, particles background
2. **SlideDadosGerados.tsx** - "DADOS GERADOS" with animated counter showing 124 ZB, data source icons (Mobile, Web, Sensores, Social, IoT, ...) using Lucide icons, large number display "124 000 000 000 000 000 000 000" on the right side
3. **SlideDadosRepresados.tsx** - "DADOS REPRESADOS" with area chart/gradient visualization showing dammed data, text about 60-73% unused data, Forrester source
4. **SlideDadosDesafio.tsx** - "DADOS O DESAFIO" with 10 building icons (3 highlighted in magenta = 32%), large "32%" number, bottom quote about data being vital
5. **SlideDadosLabirinto.tsx** - "O LABIRINTO DOS DADOS" with 3 cards (Duplicacao, Inconsistencia, Lentidao), animated icons on hover, explanatory text about data silos

### Stage 2: Slides 6-10 (Data Driven Concept)

6. **SlideCustoDemora.tsx** - "O CUSTO DA DEMORA" with timeline/list of pain points (slow reports, intuition-based decisions, lost opportunities), hourglass animation
7. **SlideDataDrivenCapa.tsx** - Cover "DATA DRIVEN: O QUE E?"
8. **SlideDataDrivenConceito.tsx** - "O QUE E DATA DRIVEN" with definition, 3 pillars (Decisoes Inteligentes, Entendimento do Cliente, Oportunidades)
9. **SlideJornadaDecisao.tsx** - Split screen: Traditional (gray/perception) vs Data Driven (colorful/data science), interactive questions
10. **SlideJornadaIceberg.tsx** - Iceberg SVG illustration: above water (IA Generativa, Analytics), below water (Fundacao, Governanca, Qualidade, Consolidacao)

### Stage 3: Slides 11-15 (Data Architecture)

11. **SlideJornadaInicio.tsx** - Starting the Data Driven journey, two cards (Data Lake, Data Warehouse)
12. **SlideDataLakeVsWarehouse.tsx** - Side-by-side comparison with descriptions and practical examples (car manufacturer)
13. **SlidePilaresDataDriven.tsx** - Three columns (Pessoas, Tecnologia, Processos), bottom section "Por que ser Data Driven?"
14. **SlideAWSDataDriven.tsx** - Circular diagram with AWS services (OpenSearch, Kinesis, MSK, SageMaker, QuickSight, Lake Formation, DataZone, Athena, EMR, AI Services, Redshift, Glue) around S3 center
15. **SlideArquiteturaReferencia.tsx** - "ARQUITETURA DE REFERENCIA" with large placeholder space for architecture diagram

### Stage 4: Slides 16-20 (QuickSight & Cases)

16. **SlideQuickSightIntro.tsx** - QuickSight BI serverless overview, feature list (Spice, ML, Forecast, RLS, Embedded, etc.)
17. **SlideQuickSightEditor.tsx** - QuickSight Editor description, mobile optimization, two image placeholder spaces
18. **SlideQuickSuiteBrief.tsx** - Brief QuickSuite overview slide
19. **SlideCaseSurf.tsx** - Surf Telecom case study: Data Lake CDR, stats (96% reduction, 0.2s latency, 40% cost reduction), company description
20. **SlideCaseCleartech.tsx** - Cleartech case study: Data Lake StirShaken, stats (+60BI records, certification, 99.99% availability)

### Final Step: Update Index.tsx

Import all 20 new slides and insert them into the `slides` array between `SlideOfertasServicos` and `SlideCoverInfra`.

### Technical Details

- All slides follow existing pattern: `slide network-bg` container, `NuageLogo` top-left, `slide-content` wrapper
- Use existing CSS classes: `text-gradient-magenta`, `text-gradient-gold`, `text-gradient-cyan`, `card-glass`, `pillar-card`, `animate-fade-in-up`
- Lucide React icons for all iconography
- Counter animation via CSS or simple React state effect
- SVG iceberg drawn inline for the iceberg slide
- Reference images are used for visual inspiration only, not embedded directly
- The Surf and Cleartech case slides will recreate the layouts from the reference images using code

&nbsp;

INFORMAÇÕES COMPLEMENTARES:

SLIDE 1: CAPA COM NOME: DADOS, O SEGREDO PARA O SUCESSO EMPRESARIAL

SLIDE 2: DADOS GERADOS

As empresas geram cada vez mais dados, tendo alcançado a marca de  ZB

FONTES DE DADOS:

MOBILE, WEB, SENSORES, SOCIAL, IOT

E TEM QUE TER UM NUMERO MOSTRANDO O TAMANHO DA ESCALA QUE A GENTE TEM: 124000000000000000000000

SLIDE 3: DADOS REPRESADOS: A IMAGEM ANEXA MOSTRANDO A VISÃO DE DAODS REPRESADOS:

DE ACOROD COM A PESQUISA FEITA PELA FORRESTER: ENTRE 60¨% E 73% DE TODOS OS DADOS DE UMA EMPRESA NÃO SAO UTILIZADOS PARA ANLISA / FONTE FORRESTER

SLIDE 4: DADOS O DESAFIO

APENAS 32% DAS EMPRESAS RELATARAM SER CAPAZES DE OBTER VALOR TANGIVEL E MENSURAVEL A PARTIR DE DADOS

CONTAR COM DADOS CONCRETOS E CONFIAVEIS NÃO É SOMENTE UM DIFERENCIAL COMPETITIVO E SIM UM PROCESSO VITAL PARA SOBREVIVENCIA DAS EMPRESAS NO MERCADO

IMAGEM REPRESENTNADO A VISÃO DE 32%

SLIDE 5: O LABIRINTO DOS DADOS

A Causa Raiz da Lentidão e Inconsistência

Por que seus dados, que deveriam ser um ativo, hoje geram tanta fricção? A causa é estrutural: a proliferação de 'silos de dados’.

Informações vitais estão isoladas em diferentes sistemas e departamentos – como ilhas que não se comunicam. Cada setor tem sua 'versão da verdade', gerando duplicação, inconsistência e um esforço para consolidar qualquer informação.

CARDS:

Duplicação: Custos desnecessários e inconsistência.

Inconsistência: Dados diferentes contam histórias diferentes. Qual confiar?

Lentidão: Qualquer análise cross-funcional vira um projeto manual e demorado.

COM ICONES ANIMADOS REPRESENTANDO CADA UM DOS CARDS

slide: 06: O CUSTO DA DEMORA

Quando os Dados se Tornam um Freio para o Negócio

DIFICULDADE NA OBTENÇÃO ÁGIL DE DADOS PARA TOMADA DE DECISÃO

Relatórios que levam semanas: 

Decisões que deveriam ser instantâneas, adiadas pela lentidão.

Decisões baseadas em intuição: 

Operar no escuro, aumentando riscos e perdendo oportunidades.

Oportunidades 

Perdidas:

 O mercado não espera. A agilidade é a nova moeda de troca.

SLIDE:07 - DATA DRIVEN: O QUE É?

SLIDE: 08: O QUE É O DATA DRIVEN

Transformando Dados em Vantagem Competitiva e Crescimento Sustentável

Data Driven: escolhas não são feitas com base em intuição, "achismos" ou experiências passadas isoladas, mas sim em evidências concretas e insights extraídos da análise sistemática de dados relevantes. É um compromisso contínuo com a objetividade e a veracidade que os dados podem oferecer.

Decisões Mais Inteligentes e Rápidas: "Respostas ágeis a mudanças de mercado e otimização de recursos."

Entendimento Profundo do Cliente: "Personalização de produtos e serviços, elevando a experiência do cliente."

Identificação de Novas Oportunidades: "Descoberta de mercados inexplorados e tendências emergentes através da análise preditiva."

SLIDE 09: JORNADA DATA DRIVEN:

CENÁRIO TRADICIONAL: DECISÕES BASEADAS EM : PERCEPÇÃO: PERCEPÇÕES COGNITIVIAS BASEADAS NA EXPERIENCIA INDIVIDUAL E/OU COLETIVA

vs

cenário DATA DRIVEN - CIENCIA DE DADOS , BASEADDO NO VALOR, COSINEGUINDO RESPONDER PERGUNTAS COMO O QUE ACONTECEU? ACONTECERÁ NOVAMENTE? POR QUE ACONTECEU? O QUE DEVE SER FEITO, ISSO TUDO BASEADO NOS DADOS DAS EMRPESAS

SLIDE 10: JORNADA DATA DRIVEN (ESSE SLIDE AQUI É MT FOCADO EM UMA VISAO DE UM ICE BERG, MOSTRANDO QUE A PONTA DO ICEBERG REPRESENTA APENAS A PONTA DO ICEBERG, , CONSIDENRADO A PARTE DE IA GENEWRATIVA E ANALISE DE DADOS E DESCCRIITIVA DE PREDITIVA... TODO O RESTO, OUS EJA A PARTE DE BAIXO DO ICE BERG REPRESENTA OS DADOS CONSOLIDADEDOS, DADOS CONFIAVEIS E DADOS COM QUALDIADE E GESTÃO E GOVERNNDAD DEDAODS E FUNDAÇÃO DE DADOS)

SLIDE 11:

A jornada para se tornar uma organização Data Driven começa com:

Avaliação do estado atual dos dados

Processos, definindo objetivos 

Jornada clara. 

A coleta e integração de dados de diversas fontes, 

Utilizando de estratégia, ferramentas e soluções como: Data Lakes e Data Warehouses.

UM CARD COM O ESCRITO: DATA

LAKE

 E OUTRO CARD COM ESCRITO DATA WAREHOUSE

slide 12:

DATALAKE vs DATA WAREHOUSE

DATA LAKE

Imagine um grande lago onde você armazena tudo – desde garrafas de água (dados brutos e não estruturados como fotos ou textos) até caixas organizadas (dados estruturados). Não importa o formato, tudo vai para o lago. Ele serve como um repositório central de baixo custo para a totalidade dos seus dados, prontos para qualquer análise futura.

Exemplo Prático (Data Lake): Uma montadora armazena todos os vídeos de testes de colisão, dados de sensores de carros autônomos, posts de redes sociais sobre seus veículos e registros de vendas. Tudo isso, em seu formato original, está no Data Lake.

             DATA WAREHOUSE

Pense em uma despensa super organizada e otimizada para consulta. Nela, você só guarda ingredientes (dados) que já foram limpos, preparados e categorizados especificamente para fazer as receitas (análises) mais comuns e importantes. É ideal para responder rapidamente a perguntas de negócio pré-definidas.

Exemplo Prático (Data Warehouse): A montadora pega os dados de vendas e custos do Data Lake, organiza-os em tabelas de fácil acesso para responder: "Qual a margem de lucro por modelo de carro na região X no último trimestre?" O Data Warehouse entrega essa resposta em segundos.

SLIDE 13:

PILARES JORNADA DATA DRIVEN

PESSOAS

A empresa deve buscar uma equipe qualificada para lidar com os dados e a jornada de implementação. Isso inclui a contratação de consultoria e capacitação de profissionais especializados em dados. 

TECNOLGOIA

Para se tornar data-driven, a empresa precisa de uma infraestrutura tecnológica que suporte a coleta, armazenamento e análise de dados. Isso inclui a adoção de ferramentas de BI (Business Intelligence), banco de dados, ferramentas de visualização e outras soluções tecnológicas

PROCESSOS

A empresa precisa estabelecer processos que permitam a coleta, análise e uso dos dados de forma eficiente e eficaz. Isso inclui a definição de indicadores-chave de desempenho (KPIs), a criação de relatórios e dashboards, a definição de procedimentos de coleta de dados e a adoção de práticas de governança de dados

Por que ser Data Driven ?

A orientação a dados traz clareza matemática na tomada de decisões:

Redução de equívocos e custos operacionais

Otimização de tempo para tomadas de decisão

Viabiliza a identificação de criação de novos produtos e reduz o tempo de lançamento para o mercado

slide 14:

COMO A AWS SIMPLIFICA A SUA JORNADA DATA-DRIVEN

AI NESSE SLIDE VAMOS TER DIVERSOS SERVIÇOS... AI VC PODE COLOCAR SERVIÇOS COMO:

AWS OPENSERACH 

AMAZON KINESES 

AMAZON MSK

AMAZON SAGEMAKER

AMAZO NQUICKSIGHT 

AMWS LAKE FORMATION

AWS DATAZONE

AWS ATHENA

AMAZON EMR

AWX AWS AI SERVICES

AMAZONR REDSHIFT

AWS GLUE 

SLIDE 15: UM SLIED ESPECIFICOC PARA A ARQUITEUTRA DE REFERENCIA: ARQUITETURA DE REFERÊNCIA

COM ESPAÇO PARA A ARQUITEUTRA

SLIDE 16: UM SLIDE ESPECIFICO PARA O QUICKSIGHT ;

O QuickSight é um serviço de BI serverless da AWS, com modelo de precificação de acordo com o seu uso e quantidade de usuários habilitados.

Com ele, é possível realizar a criação de painéis customizáveis, reaproveitando os recursos disponibilizados dentro ferramenta.

Principais recursos:

Spice (Cachê dos dados)

Conversação (ML – Linguagem Natural)

Análises Avançadas (ML – Anomalias e Forecast)

Painéis Interativos (Filtros, Drill Drown...)

Conectores com serviços AWS e Externos

Incluso DataBricks

Permissionamento a nível de linha (RLS)

Embeded em sites e aplicações

Comunidade ativa (Link)

SLIDE 17: OUTRO SLIDE ESPECIFICO PARA O QUICKSIGHT EDITOR

O Editor do QuickSight é reconhecido por sua interface intuitiva que simplifica significativamente a análise de dados. 

A ferramenta é projetada para ser amigável, com funcionalidades de arrastar e soltar que facilitam a criação de visualizações de dados e dashboards personalizados, permitindo que usuários sem, ou com pouco conhecimento técnico possam gerar insights de forma autônoma.

Um dos pontos fortes do QuickSight é sua otimização para dispositivos móveis, que garante acesso fácil e imediato a relatórios e dashboards.

e um espaço pra duas iamgens4

SLIDE 18: UM SLIDE ESPECIFIOC PARA FALAR BREVEMENTE SOBRE O QUICKSUITE

SLIDE 19: CASE DE SUCESSO DA SURF

SLIDE 20: CASE DE SUCESSO DA CLEARTECH

&nbsp;