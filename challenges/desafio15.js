db.produtos.updateMany({ avaliacao: { $exists: 0 } }, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany({ tags: "bovino" }, { $inc: { avaliacao: 5 } });

db.produtos.updateMany({ tags: "ave" }, { $inc: { avaliacao: 3 } });

db.produtos.find({}, { nome: true, avaliacao: true, _id: false });