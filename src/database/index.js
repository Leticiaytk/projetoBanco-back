import msql from "mysql2";

const connection = msql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projeto_bd",
});

export { connection };
