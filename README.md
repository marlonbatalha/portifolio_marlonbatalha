# 🚀 Portfólio Profissional - Marlon Batalha

Portfólio moderno e minimalista desenvolvido com Next.js 16, React 19, TypeScript e Framer Motion.

## ✨ Características

- 🎨 **Design Minimalista** - Interface limpa e profissional
- 🌑 **Tema Escuro** - Paleta de cores neutras e sofisticadas (preto, azul escuro, slate)
- ✨ **Animações Suaves** - Powered by Framer Motion
- 📱 **Totalmente Responsivo** - Perfeito em todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e eficiente
- 🎯 **SEO Otimizado** - Metadata completa
- 🔥 **Scroll Animations** - Animações ao rolar a página
- 💼 **Seções Completas** - Hero, Sobre, Projetos, Habilidades e Contato

## 🛠️ Tecnologias

- **Framework:** Next.js 16.1.1
- **UI Library:** React 19.2.3
- **Linguagem:** TypeScript
- **Animações:** Framer Motion 12.26.2
- **Estilização:** CSS Modules
- **Deploy:** Vercel

## 🎨 Design System

### Paleta de Cores
- **Background:** `#000000` (Preto puro)
- **Secondary:** `#0a0a0a` (Preto suave)
- **Tertiary:** `#171717` (Cinza escuro)
- **Accent:** `#3b82f6` (Azul profissional)
- **Text Primary:** `#fafafa` (Branco suave)
- **Text Secondary:** `#d4d4d4` (Cinza claro)

### Tipografia
- **Display:** Space Grotesk (Títulos)
- **Body:** Inter (Texto)

## 🚀 Como Executar Localmente

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd portifolio_marlonbatalha
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Build para Produção

```bash
pnpm build
pnpm start
```

## 🌐 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe seu repositório do GitHub
5. A Vercel detectará automaticamente as configurações do Next.js
6. Clique em "Deploy"

### Opção 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Veja o guia completo em `DEPLOY.md`

## 📝 Personalização

### Informações Pessoais

Edite os seguintes arquivos:

- **Hero:** `src/components/Hero.tsx` - Nome, título, descrição
- **About:** `src/components/About.tsx` - Sua história
- **Projects:** `src/components/Projects.tsx` - Seus projetos
- **Skills:** `src/components/Skills.tsx` - Suas habilidades
- **Contact:** `src/components/Contact.tsx` - Informações de contato

### Cores e Estilos

Personalize em `src/app/globals.css`:
- Variáveis CSS
- Cores
- Tipografia
- Espaçamentos

Veja o guia completo em `CUSTOMIZATION.md`

## 📂 Estrutura do Projeto

```
portifolio_marlonbatalha/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal + SEO
│   │   ├── page.tsx         # Página inicial
│   │   └── globals.css      # Design system
│   └── components/
│       ├── Header.tsx       # Navegação fixa
│       ├── Hero.tsx         # Seção hero
│       ├── About.tsx        # Sobre mim
│       ├── Projects.tsx     # Projetos
│       ├── Skills.tsx       # Habilidades
│       ├── Contact.tsx      # Contato
│       └── Footer.tsx       # Rodapé
├── public/                  # Arquivos estáticos
│   └── images/             # Suas imagens
├── DEPLOY.md               # Guia de deploy
├── CUSTOMIZATION.md        # Guia de personalização
└── package.json
```

## 🎯 Seções do Portfólio

### 1. Hero
- Apresentação impactante
- Call-to-action
- Estatísticas (anos de experiência, projetos, etc.)
- Background grid animado

### 2. Sobre
- Descrição profissional
- Cards informativos
- Animações ao scroll

### 3. Projetos
- Grid de projetos
- Categorias
- Stack tecnológica
- Links para demo e código

### 4. Habilidades
- Categorias (Frontend, Backend, Ferramentas)
- Barras de progresso animadas
- Níveis de proficiência

### 5. Contato
- Formulário funcional
- Informações de contato
- Links de redes sociais

## 🔧 Recursos Avançados

### Framer Motion
- Animações de entrada suaves
- Scroll-triggered animations
- Hover effects
- Layout animations

### Performance
- Code splitting automático
- Lazy loading
- Otimização de imagens
- CSS modular

### SEO
- Meta tags otimizadas
- Open Graph
- Structured data
- Sitemap automático

## 📱 Responsividade

- **Desktop:** Layout em grid completo
- **Tablet:** Grid adaptativo
- **Mobile:** Layout em coluna única
- **Breakpoints:** 480px, 768px, 968px

## ✅ Checklist de Deploy

- [ ] Personalizei minhas informações
- [ ] Adicionei meus projetos
- [ ] Atualizei habilidades
- [ ] Configurei contato
- [ ] Testei localmente
- [ ] Build funcionando
- [ ] Código no GitHub
- [ ] Deploy na Vercel
- [ ] Testado em mobile
- [ ] SEO verificado

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Marlon Batalha**

- Portfolio: [seu-portfolio.vercel.app](https://seu-portfolio.vercel.app)
- LinkedIn: [seu-linkedin](https://linkedin.com)
- GitHub: [@seu-usuario](https://github.com)

---

**Desenvolvido com ❤️ usando Next.js, React, TypeScript e Framer Motion**
