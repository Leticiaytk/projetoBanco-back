import { connection } from "../database/index.js";

async function newClient(req, res) {
  const {
    //usar o mesmo nome
    cpf,
    name,
    mail,
    password,
    cep,
    adress,
    number,
    bairro,
  } = req.body;

  connection.query(
    `insert into cliente (cpf, client_name, client_mail, client_password, client_cep, client_adress, client_number, client_bairro) values ('${cpf}','${name}','${mail}','${password}','${cep}', '${adress}', '${number}', '${bairro}');`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function listClient(req, res) {
  const { cpf } = req.params;
  connection.query(
    `select * from cliente where cpf=${cpf};`,
    (error, results, fields) => {
      console.log(results);
      if (error) {
        return res.json(error);
      }
      return res.json(results);
    }
  );
}

async function updateClient(req, res) {
  const {
    //usar o mesmo nome
    name,
    mail,
    password,
    cep,
    adress,
    number,
    bairro,
  } = req.body;
  const { cpf } = req.params;

  connection.query(
    `update cliente set  client_name='${name}', client_mail='${mail}', client_password='${password}',  client_cep='${cep}', client_adress='${adress}', client_number='${number}', client_bairro='${bairro}' where cpf=${cpf};`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

async function deleteClient(req, res) {
  const { cpf } = req.params;

  connection.query(
    `delete from cliente where cpf=${cpf}`,
    (error, results, fields) => {
      console.log(error, results, fields);
      if (error) {
        return res.json(error);
      }
      return res.json("ok");
    }
  );
}

export { newClient, listClient, updateClient, deleteClient };
