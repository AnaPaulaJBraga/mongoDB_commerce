db.resumoProdutos.insertOne(
    { franquia: "McDonalds", totalProdutos: db.produtos.countDocuments({}) },
  );
  
  db.resumoProdutos.find(
      { franquia: "McDonalds" }, { franquia: true, totalProdutos: true, _id: false },
      );