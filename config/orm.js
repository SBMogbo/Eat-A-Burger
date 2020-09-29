var connection = require("../config/connection.js");
// Import MySQL connection.
function createQmarks(num){
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

function translateSql(ob){
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {devouer: true} => ["devouer=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


var orm ={
  selectAll: function(table,cb){
    var dbQuery = "SELECT * FROM " + table + ";";
    connection.query(dbQuery, function(err,res){
      if(err){
        throw err;
      }
      cb(res);
    });
  },
  insertOne:function(table,cols,vals,cb){
    var dbQuery = "INSERT INTO " + table +"(" + cols.toString()+")"+ "VALUES ("+ createQmarks(vals.length)+")";
  console.log(dbQuery);
  connection.query(dbQuery,vals,function(err, res){
    if(err){
      throw err;
    }
    cb(res);
  });
  
  },
  updateOne:function(table,objColVals,condtion,cb){
    var dbQuery= "UPDATE" + table + "SET" + translateSql(objColVals)+"WHERE"+ condtion;
    connection.query(dbQuery,function(err, res){
      if(err){
        throw err;
      }
      cb(res);
    });
  },
  deleteOne: function(table,condtion,cb){
    var dbQuery= "DELETE FROM" + table + "WHERE" + condtion;
    connection.query(dbQuery,vals,function(err, res){
      if(err){
        throw err;
      }
      cb(res);
    });
  }
}

// Export the orm object for the model (burger.js).
module.exports = orm;
