var MongoClient = require('mongodb').MongoClient;
var ShopDAO = require('./shopdaonative.js');

MongoClient.connect('mongodb://localhost:27017/onlineAd', function(err, db) {
    if(err) throw err;
console.log("Connected to DB");
var shopdao=ShopDAO(db);

//shopdao.simpleInsert();
	
//shopdao.selectWhere();	

//shopdao.selectWhereANDOrderby();

//shopdao.selectWhereOR();

//shopdao.selectSkipLimit();



//shopdao.selectConditionsGTLTEQ();

//shopdao.selectisNullisNotNull();

//shopdao.selectWhereIN();

//shopdao.selectLike();

//shopdao.selectDistinct();

//shopdao.selectWhereAll();

shopdao.selectElemMatch();

//console.log('My DAO function ' + mydao.simpleInsert());
   
});

