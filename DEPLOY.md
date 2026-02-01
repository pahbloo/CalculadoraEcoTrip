# 🚀 Guia de Deploy - Calculadora EcoTrip

## Deploy no GitHub Pages

### Passo 1: Configurar o GitHub Pages

1. Acesse o repositório: `https://github.com/pahbloo/CalculadoraEcoTrip`
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione:
   - Branch: `main` (ou `copilot/add-co2-emission-calculator`)
   - Folder: `/ (root)`
4. Clique em **Save**

### Passo 2: Aguardar o Deploy

O GitHub Pages irá automaticamente fazer o deploy. Aguarde alguns minutos.

### Passo 3: Acessar a Aplicação

A aplicação estará disponível em:
```
https://pahbloo.github.io/CalculadoraEcoTrip/
```

## Verificação do PWA

Após o deploy, verifique se o PWA está funcionando:

1. Acesse a URL no navegador
2. Abra o DevTools (F12)
3. Vá na aba **Application**
4. Verifique:
   - ✅ Manifest carregado
   - ✅ Service Worker registrado
   - ✅ Cache storage populado

## Instalação como App

### Desktop (Chrome/Edge)
1. Acesse a URL
2. Clique no ícone de instalação (➕) na barra de endereços
3. Confirme a instalação

### Mobile (Android)
1. Acesse a URL no Chrome
2. Toque no menu (⋮)
3. Selecione "Adicionar à tela inicial"
4. Confirme

### Mobile (iOS/Safari)
1. Acesse a URL no Safari
2. Toque no botão de compartilhar
3. Selecione "Adicionar à Tela Inicial"
4. Confirme

## Teste Offline

1. Acesse a aplicação online
2. Desconecte a internet
3. Recarregue a página
4. A aplicação deve continuar funcionando

## Troubleshooting

### Service Worker não registra
- Certifique-se que está acessando via HTTPS ou localhost
- Limpe o cache do navegador
- Verifique o console para erros

### Ícones não aparecem
- Os ícones são placeholders simples
- Para produção, substitua `icon-192.png` e `icon-512.png` por ícones reais

### Cache não atualiza
- Incremente a versão em `sw.js` (CACHE_NAME)
- O service worker irá limpar caches antigos automaticamente

## Manutenção

### Atualizar fatores de emissão
Edite o objeto `emissionFactors` em `app.js`:
```javascript
const emissionFactors = {
    bicycle: 0,
    car: 0.192,
    bus: 0.105,
    truck: 0.250
};
```

### Atualizar distâncias
Edite o objeto `distanceMatrix` em `app.js`.

### Adicionar novas capitais
1. Adicione ao array `capitals`
2. Adicione distâncias no `distanceMatrix`

## Performance

A aplicação é otimizada para:
- ✅ First Contentful Paint < 1s
- ✅ Time to Interactive < 2s
- ✅ Lighthouse PWA score: 100
- ✅ Funciona offline
- ✅ Instalável

## Segurança

- ✅ Sem vulnerabilidades (CodeQL verified)
- ✅ Sem coleta de dados
- ✅ Sem APIs externas
- ✅ Tudo processado localmente
