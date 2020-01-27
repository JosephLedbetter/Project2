const connection = require("./connection.js");

const orm = {

    selectusser: function(name,pass,cb) {
        const queryString = "SELECT id FROM ussers WHERE ussername=? AND pass=? ";
        connection.query(queryString, [name,pass], function(err, result) {
          if (err) throw err;
          cb(result)
        });
      },
      insertUsser: function (name, pass,cb) {
          console.log(name);
          
        const queryString = `INSERT INTO ussers (ussername,pass) VALUES (?,?) ` ;
        connection.query(queryString,[name,pass], function (err,result) {
            if(err) throw err;
            cb(result);
        })
      },
      identifyUsser: function (id,cb) {
        connection.query("SELECT ussername FROM ussers WHERE id=?",id,function (err,result) {
          if(err) throw err;
          cb(result);
        })
      },
      checkUsserING: function (id,cb) {
        connection.query("SELECT ingredient_id FROM ussers_ingredients WHERE usser_id=? ",id,function (err,result) {
          if(err) throw err;
          cb(result);
        })

},
checkING: function (id,cb) {
  connection.query("SELECT ingredient_name FROM ingredients WHERE id=? ",id,function (err,result) {
    if(err) throw err;
    cb(result);
  })

}
}
module.exports = orm;

