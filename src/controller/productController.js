import { connection } from "../database/index.js";

async function newProduct(req, res) {
  const {
    //usar o mesmo nome
    name,
    description,
    category,
    price,
    marca,
    heigth,
    qnt,
    market_id,
  } = req.body;

  connection.query(
    `insert into produto (product_name, product_description, product_category, product_price, product_marca, product_heigth, product_qnt, market_id) values ('${name}','${description}','${category}', '${price}', '${marca}', '${heigth}', '${qnt}', '${market_id}');`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function listProduct(req, res) {
  const { product_category, product_name } = req.query;

  let query = "select * from produto";

  if (product_category) {
    query += ` where product_category='${product_category}';`;
  } else if (product_name) {
    query += ` where product_name='${product_name}';`;
  } else {
    query += ";";
  }

  connection.query(query, (error, results, fields) => {
    console.log(results);
    if (error) {
      return res.json(error);
    }
    return res.json(results);
  });
}

async function updateProduct(req, res) {
  const { name, description, category, price, marca, heigth, qnt } = req.body;
  const { product_id } = req.params;

  connection.query(
    `update produto set product_name='${name}', product_description='${description}', product_category='${category}', product_price='${price}', product_marca='${marca}', product_heigth='${heigth}', product_qnt='${qnt}' where product_id=${product_id};`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function deleteProduct(req, res) {
  const { product_id } = req.params;

  connection.query(
    `delete from produto where product_id=${product_id}`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

export { newProduct, listProduct, updateProduct, deleteProduct };
