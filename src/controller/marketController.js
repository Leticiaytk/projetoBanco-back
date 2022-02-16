import { connection } from "../database/index.js";

async function newMarket(req, res) {
  const {
    //usar o mesmo nome
    name,
    mail,
    password,
    description,
    phone,
    delivery,
    cep,
    adress,
  } = req.body;

  connection.query(
    `insert into mercado (market_name, market_mail, market_password, market_description, market_phone, delivery, market_cep, market_adress) values ('${name}','${mail}','${password}','${description}', '${phone}',${delivery}, '${cep}', '${adress}');`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function listMarket(req, res) {
  connection.query(`select * from mercado`, (error, results, fields) => {
    console.log(results);
    if (error) {
      return res.json(error);
    }
    return res.json(results);
  });
}

async function updateMarket(req, res) {
  const {
    //usar o mesmo nome
    name,
    mail,
    password,
    description,
    phone,
    delivery,
    cep,
    adress,
    number,
    bairro,
  } = req.body;
  const { market_id } = req.params;

  connection.query(
    `update mercado set market_name='${name}', market_mail='${mail}', market_password='${password}', market_description='${description}', market_phone='${phone}', delivery=${delivery}, market_cep='${cep}', market_adress='${adress}', market_number='${number}', market_bairro='${bairro}' where market_id=${market_id};`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function deleteMarket(req, res) {
  const { market_id } = req.params;

  connection.query(
    `delete from mercado where market_id=${market_id}`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

export { newMarket, listMarket, updateMarket, deleteMarket };
