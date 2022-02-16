import { connection } from "../database/index.js";

async function newOrder(req, res) {
  const {
    //usar o mesmo nome
    id,
    delivery,
    cpf,
    market_id,
  } = req.body;

  connection.query(
    `insert into pedido (order_delivery, cpf, market_id) values ('${delivery}','${cpf}','${market_id}');`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function listOrder(req, res) {
  const { market_id } = req.params;
  connection.query(
    `select * from pedido where market_id=${market_id}`,
    (error, results, fields) => {
      console.log(results);
      if (error) {
        return res.json(error);
      }
      return res.json(results);
    }
  );
}

async function deleteOrder(req, res) {
  const { order_id } = req.params;

  connection.query(
    `delete from pedido where market_id=${order_id}`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

export { newOrder, listOrder, deleteOrder };
