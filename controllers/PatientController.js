// import Model Patient
const Patient = require("../models/Patient");

// buat class PatientController
class PatientController {
  // buat fungsi
  //menambahkan keyword Async memberitahu proses Asynchronous
  async index(req, res) {
    //memanggil method static all dengan async await
      const patients = await Patient.all();
      if (patients) {
      // TODO 4: Tampilkan data patients
      // code here
      const data = {
        message: "Menampilkan semua resource data patients",
        data: patients,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient not found`,
      };
      res.status(200).json(data);
    }
  }

  async store(req, res) {
    // TODO 5: Tambahkan (create) data patients
    // code here
    const patients = await Patient.create(req.body);

    const data = {
      message: "Menambahkan resource data patients",
      data: patients,
    };

    res.status(201).json(data);
  }

  async update(req, res) {
    // TODO 6: Update data patients
    // code here
    const { id } = req.params;
    const { name } = req.params;
    const patients = await Patient.find(id);

    if (patients) {
      //melakukan update data patients
      const patients = await Patient.update(id, req.body);
      const data = {
        message: `Mengedit resource data patients`,
        data: patients,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient not found`,
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    // TODO 7: Hapus data patients
    // code here
    const { id } = req.params;
    const patients = await Patient.find(id);

    if (patients) {
      await Patient.delete(id);
      const data = {
        message: `Menghapus resource data Patient`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient not found`,
      };

      res.status(404).json(data);
    }
  }
  async show(req, res) {
    const { id } = req.params;
    //cari id patients berdasarkan id
    const patients = await Patient.find(id);

    if (patients) {
      const data = {
        message: `Menampilkan detail resource data patients`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient not found`,
      };

      res.status(404).json(data);
    }
  }

  async search(req, res) {
    const { name } = req.params;
    //cari data patients berdasarkan name
    const patients = await Patient.search(name);

    if (patients) {
      const data = {
        message: `Menampilkan detail resource nama data patients`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient not found`,
      };

      res.status(404).json(data);
    }
  }
  
  async positive(req, res) {
    const { status } = req.params;
    //cari data patients positive
    const patients = await Patient.findByStatus(status);

    if (patients) {
      const data = {
        message: `Menampilkan detail resource data positive patients`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient positive not found`,
      };

      res.status(404).json(data);
    }
  }

  async recovered(req, res) {
    const { status } = req.params;
    //cari data patients recovered
    const patients = await Patient.findByStatus(status);

    if (patients) {
      const data = {
        message: `Menampilkan detail resource data recovered patients`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient recovered not found`,
      };

      res.status(404).json(data);
    }
  }
  
  async dead(req, res) {
    const { status } = req.params;
    //cari data patients dead
    const patients = await Patient.findByStatus(status);

    if (patients) {
      const data = {
        message: `Menampilkan detail resource data dead patients`,
        data: patients,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Patient dead not found`,
      };

      res.status(404).json(data);
    }
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;