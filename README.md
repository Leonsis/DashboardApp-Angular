# 📊 DashboardApp-Angular

## Visão Geral do Projeto

O **DashboardApp-Angular** é uma aplicação web desenvolvida em Angular para gestão e monitoramento de fiscalizações. O sistema oferece uma interface intuitiva e responsiva que permite visualizar métricas importantes, acompanhar o progresso de fiscalizações e gerenciar atividades relacionadas.

### 🎯 Principais Funcionalidades

- **Sistema de Autenticação** com login seguro
- **Dashboard Interativo** com métricas em tempo real
- **Visualizações Gráficas** (gráficos de rosca e medidor)
- **Gestão de Fiscalizações** com listas de últimas e próximas atividades
- **Interface Responsiva** adaptável a diferentes dispositivos
- **Navegação Intuitiva** com sidebar colapsável

### 📈 Métricas Disponíveis

- Total de Fiscalizações
- Fiscalizações Concluídas
- Fiscalizações Pendentes
- Progresso da Meta Mensal
- Status das Empresas Ativas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular** `^20.3.0` - Framework principal
- **Angular CLI** `^20.3.5` - Ferramentas de desenvolvimento
- **TypeScript** `~5.9.2` - Linguagem de programação
- **RxJS** `~7.8.0` - Programação reativa

### UI/UX
- **Bootstrap** `^5.3.8` - Framework CSS
- **ng-bootstrap** `^19.0.1` - Componentes Angular + Bootstrap
- **FontAwesome** - Ícones

### Desenvolvimento
- **Node.js** (versão recomendada: 18.x ou superior)
- **npm** - Gerenciador de pacotes
- **Karma** `~6.4.0` - Test runner
- **Jasmine** `~5.9.0` - Framework de testes

### Build e Deploy
- **Angular Build** `^20.3.5` - Sistema de build
- **Zone.js** `~0.15.0` - Detecção de mudanças

## 🚀 Passo a Passo para Reprodução (Ambiente Local)

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 18.x ou superior)
- **npm** (geralmente vem com o Node.js)
- **Git** para clonagem do repositório

### 1. Clonagem do Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/DashboardApp-Angular.git

# Navegue para o diretório do projeto
cd DashboardApp-Angular
```

### 2. Instalação das Dependências

```bash
# Instale todas as dependências do projeto
npm install
```

### 3. Execução da Aplicação

```bash
# Inicie o servidor de desenvolvimento
ng serve

# Ou use o comando alternativo
npm start
```

### 4. Acesso à Aplicação

Após executar o comando acima, a aplicação estará disponível em:

**🌐 URL:** [http://localhost:4200](http://localhost:4200)

O navegador será aberto automaticamente. Caso isso não aconteça, acesse manualmente a URL acima.

### 5. Credenciais de Acesso

Para acessar o sistema, utilize as seguintes credenciais:

- **Email:** `admin`
- **Senha:** `admin`

## 📱 Como Usar

1. **Login:** Acesse a página inicial e faça login com as credenciais fornecidas
2. **Dashboard:** Após o login, você será redirecionado para o dashboard principal
3. **Navegação:** Use o menu lateral para navegar entre as seções
4. **Métricas:** Visualize as métricas importantes nos cards do dashboard
5. **Gráficos:** Analise os gráficos de rosca e medidor para insights visuais
6. **Fiscalizações:** Consulte as listas de últimas e próximas fiscalizações

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── Dashboard/           # Página principal do dashboard
│   ├── login/              # Sistema de autenticação
│   ├── navbar/             # Barra de navegação superior
│   ├── sidebar/            # Menu lateral
│   └── components/         # Componentes reutilizáveis
│       ├── metric-card/    # Card de métricas
│       ├── donut-chart/    # Gráfico de rosca
│       ├── gauge-chart/    # Gráfico de medidor
│       └── fiscalization-item/ # Item de fiscalização
├── styles.css              # Estilos globais
└── index.html              # Página principal
```

## 🧪 Executando Testes

```bash
# Execute os testes unitários
ng test

# Execute os testes com coverage
ng test --code-coverage
```

## 🏗️ Build para Produção

```bash
# Gere o build de produção
ng build

# Build otimizado para produção
ng build --configuration production
```

## 📦 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run watch` - Build em modo watch
- `npm test` - Executa os testes

## 🔧 Configurações Adicionais

### Desenvolvimento
- **Porta padrão:** 4200
- **Hot reload:** Habilitado
- **Source maps:** Habilitados em desenvolvimento

### Produção
- **Otimização:** Habilitada
- **Minificação:** Habilitada
- **Tree shaking:** Habilitado

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas, entre em contato através dos seguintes canais:

- **Email:** suporte@dashboardapp.com
- **Issues:** [GitHub Issues](https://github.com/seu-usuario/DashboardApp-Angular/issues)

---

**Desenvolvido com ❤️ usando Angular**
