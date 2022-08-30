ROTA PARA CRIAR PRODUTO
- insira esse body para criação do produto:
```js
{
    "title": "Banana",
    "description": "uma fruta gostosa",
    "price": 2.0
}
```

ROTA PARA CRIAR COLEÇÃO
- insira esse body para criação da coleção:
```js
{
    "title": "Frutas",
    "description": "uma coleção com todas as frutas disponíveis na minha loja",
    "products": [
        {
            "title": "Banana",
            "description": "uma fruta gostosa",
            "price": 2.0
        },
        {
            "title": "Maçã",
            "description": "outra fruta gostosa",
            "price": 5.5
        }
    ]
}
```