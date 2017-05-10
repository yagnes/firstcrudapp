var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/yag'; 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
   var insertDocuments = function(db) {
    var collection = db.collection('sachin');
    collection.insertMany([{a : 1}, {a : 2}, {a : 3}],
    function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
  });
}
  // db.close();
});
   
 