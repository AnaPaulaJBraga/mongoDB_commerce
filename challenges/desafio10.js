db.produtos.find(
    { valoresNutricionais:
         { $elemMatch: { tipo: "proteinas", percentual: { $gte: 30, $lte: 40 } } } },
    { nome: true, _id: false },
    );