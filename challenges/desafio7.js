db.produtos.find({ vendidos: { $ne: 50 }, tags: { $exists: false } },
    { nome: true, curtidas: true, _id: false });