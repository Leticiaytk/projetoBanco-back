import { connection } from "../database/index.js";

async function newItem(req, res) {
  const {
    //usar o mesmo nome
    id_produto,
    qtd_pedido,
  } = req.body;
  const { cod_pedido } = req.params;

  connection.query(
    `insert into item_pedido (id_produto, qtd_pedido, cod_pedido) values ('${id_produto}','${qtd_pedido}', '${cod_pedido}');`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function listItem(req, res) {
  const { cod_pedido } = req.params;
  connection.query(
    `select * from item_pedido where cod_pedido=${cod_pedido}`,
    (error, results, fields) => {
      console.log(results);
      if (error) {
        return res.json(error);
      }
      return res.json(results);
    }
  );
}

export { newItem, listItem };
