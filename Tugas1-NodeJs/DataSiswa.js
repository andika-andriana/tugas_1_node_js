// initialize express router
let router = require("express").Router();

// set default API responses
router.get("/", function(req,res){
  res.json({
    Nama: "Richard Muhammad",
    TanggalLahir: "14 Januari 1994",
    JenisKelamin: "Laki - Laki",
    Hobi: "Membaca Buku"
  });
});

// export api-routes module
module.exports = router;
