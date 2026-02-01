# 🌍 Calculadora EcoTrip - Emissão de CO₂

Aplicação web Progressive Web App (PWA) para calcular a emissão de CO₂ em viagens terrestres entre capitais brasileiras.

## 📋 Funcionalidades

- **Cálculo de Emissões**: Calcula a emissão de CO₂ baseada em distância e meio de transporte
- **Capitais Brasileiras**: Autocomplete para todas as 27 capitais do Brasil
- **Distâncias Precarregadas**: Tabela com distâncias entre todas as capitais
- **Inserção Manual**: Opção para inserir distância manualmente
- **4 Meios de Transporte**: Bicicleta, Carro, Ônibus e Caminhão
- **Equivalências**: Visualização de comparações (árvores, cargas de celular, etc.)
- **Créditos de Carbono**: Sugestões de plataformas para compensação
- **PWA**: Funciona offline e pode ser instalado como app

## 🚀 Como Usar

1. Acesse a aplicação em: [https://pahbloo.github.io/CalculadoraEcoTrip/](https://pahbloo.github.io/CalculadoraEcoTrip/)
2. Selecione a cidade de origem (capital brasileira)
3. Selecione a cidade de destino (capital brasileira)
4. A distância será calculada automaticamente
5. Opcionalmente, marque "Inserir distância manualmente" para ajustar
6. Selecione o meio de transporte
7. Clique em "Calcular Emissão"
8. Visualize os resultados, equivalências e sugestões de compensação

## 📊 Fatores de Emissão

Os fatores de emissão utilizados são baseados em fontes oficiais:

| Meio de Transporte | Fator de Emissão | Fonte |
|-------------------|------------------|-------|
| 🚴 Bicicleta | 0 kg CO₂/km | Transporte não motorizado |
| 🚗 Carro | 0,192 kg CO₂/km | [GHG Protocol](https://ghgprotocol.org/) |
| 🚌 Ônibus | 0,105 kg CO₂/km | IPCC Summary |
| 🚚 Caminhão | 0,250 kg CO₂/km | [GHG Protocol](https://ghgprotocol.org/) |

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização responsiva
- **JavaScript**: Lógica da aplicação (vanilla JS, sem frameworks)
- **PWA**: Service Worker para funcionamento offline
- **GitHub Pages**: Deploy e hospedagem

## 📱 Progressive Web App (PWA)

Esta aplicação é um PWA completo:

- ✅ Manifesto web (manifest.json)
- ✅ Service Worker para cache offline
- ✅ Instalável em dispositivos móveis e desktop
- ✅ Funciona sem conexão com internet
- ✅ Interface responsiva

### Instalar como App

1. No navegador Chrome/Edge: clique no ícone de instalação na barra de endereços
2. No Safari (iOS): toque em "Compartilhar" > "Adicionar à Tela Inicial"
3. No Android: toque no menu e selecione "Adicionar à tela inicial"

## 🔒 Privacidade

- Nenhum dado pessoal é coletado
- Não há login ou cadastro
- Todos os cálculos são feitos localmente no navegador
- Nenhuma informação é enviada para servidores

## 📄 Estrutura do Projeto

```
CalculadoraEcoTrip/
├── index.html          # Página principal
├── styles.css          # Estilos da aplicação
├── app.js              # Lógica JavaScript
├── manifest.json       # Manifesto PWA
├── sw.js              # Service Worker
├── icon-192.png       # Ícone 192x192
├── icon-512.png       # Ícone 512x512
└── README.md          # Documentação
```

## 🌱 Compensação de Carbono

A aplicação sugere plataformas brasileiras para compensação de emissões:

- [Moss Earth](https://www.moss.earth/) - Créditos de Carbono
- [Carbonext](https://www.carbonext.com.br/) - Compensação de Carbono
- [Iniciativa Verde](https://www.iniciativaverde.org.br/calcule-e-compense) - Calcule e Compense

## 📚 Referências

- [GHG Protocol](https://ghgprotocol.org/) - Padrão internacional de contabilização de emissões
- IPCC - Painel Intergovernamental sobre Mudanças Climáticas
- Ministério do Meio Ambiente do Brasil

## 📝 Licença

MIT License - Veja o arquivo LICENSE para detalhes

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com 💚 para um planeta mais sustentável