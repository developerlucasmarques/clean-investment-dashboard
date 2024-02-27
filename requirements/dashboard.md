# Dashboard de Investimentos

## Descrição

Este Caso de Uso irá buscar as informações do Dashboard de Investimentos em ações do usuário.

## Endpoint

`GET /dashboard/:userId`

## Caso de sucesso

- Busca as 10 principais ações da bolsa e sua valorização.

- Busca as cotações das 5 ações que mais valorizaram no dia.

- Busca o quanto o usuário já ganhou ou perdeu com as 5 maiores posições na carteira.

- Busca o rendimento semanal, mensal e anual de toda a carteira de investimentos.

- Se usuário não tiver nenhum investimento, retornar apenas as 10 principais ações da bolsa.

### Resposta

- Código de status: **200 OK**

Exemplo:

```json
{
  // 10 ações mais comercializadas na bolsa no dia atual
  "topTenStocks": [
    {
      "symbol": "AAPL",
      "price": 302.93,
      "dailyAppreciation": "+4.5%"
    },
    ...
  ],
  // 5 ações investidas pelo usuário que mais renderam no dia
  "topFiveDailyGainers": [
    {
      "symbol": "AAPL",
      "name": "Apple",
      "lastQuote": 302.93,
      "dayAppreciation": "+1.5%",
      "dayProfit": "+$1.635,99",
      "dateOfLastQuote": "01-30-2023"
    },
    ...
  ],
  // 5 ações com o maior valor investido pelo usuário
  "topFiveInvestment": [
    {
      "symbol": "AAPL",
      "name": "Apple",
      "lastQuote": 302.93,
      "appreciation": "+12.3%",
      "investmentDate": "12-31-2022",
      "totalInvestment": 201594.84
    },
    ...
  ],
  // Retorno total da carteira de investimento do usuário por período
  "investmentReturns": {
    "weekly": {
      "appreciation": "+2.9%",
      "profit": "+$32.482,32"
    },
    "monthly": {
      "appreciation": "-1.82%",
      "profit": "-$28.428,46"
    },
    "yearly": {
      "appreciation": "+25.44%",
      "profit": "+$102.428,46"
    }
  }
}
```

## Casos de Exceção

### Respostas

- Código de status: **400 Left Request**
  - Se não encontrar o usuário pelo ID.
- Código de status: **500 Internal Server Error**
  - Em caso de erro interno no servidor.
