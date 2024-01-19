// import database
const db = require("../config/database");

// membuat class Patient
class Patient {
  // buat fungsi
  static all() {
    //return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM patients";
      db.query(query, (err, result) => {
        return resolve(result);
      });
    });
  }
  
  //Membuat create resource
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    //Melakukan query berdasarkan id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  //Mengupdate data patient
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    //mencari data yang baru diupdate
    const patient = await this.find(id);
    return patient;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        //destructing array
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  //menghapus data dari database
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
  
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE name = ?";
      db.query(sql, name, (err, results) => {
        //destructing array
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, status, (err, results) => {
        //destructing array
        const [patient] = results;
        resolve(patient);
      });
    });
  }
}

// export class Patient
module.exports = Patient;
