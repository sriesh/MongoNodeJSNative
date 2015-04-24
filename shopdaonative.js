module.exports = function(db) {
  return {
   
simpleInsert: function() {
					var doc={'userid':'greg_86',
					fname:'Greg',
					lname:'Pat',
					phone:'755-888-9999',
					email:'greg34@gmail.com',
					city:'New York',
					active:'Y',
					score: 60,
					searchwords: ['57 inch TV','LED TV']
					};

					console.log("Simple Insert-------->");
					function callback(err, inserted) {
					
					console.dir(inserted);
					}

					db.collection('customer').insert(doc, callback);

    },
	
selectWhere: function() {
					
					var where={'fname':'Greg'};
					var select={'userid':1,'fname':1,'lname':1,'_id':0};
					console.log("select Where-------->");
					db.collection('customer').find(where,select).each(callback);
				
					function callback(error,customer) {
										console.dir(customer);
										}

	},
	
selectWhereANDOrderby: function() {
					
					var where={'active':'Y','city':'New York'};
				
					var options={sort:[["fname","desc"],["userid","asc"]]};   
					
					console.log("selectWhereANDOrderby-------->");
					db.collection('customer').find(where,select).sort('userid',-1).each(callback);
					//This is a variation of Sort using options
					//db.collection('customer').find(where,{},options).each(callback);
				  
					function callback(error,customer) {
										console.dir(customer);
										}

	},	
	
selectWhereOR: function() {
				
				console.log("selectWhereOR-------->");
					var where={$or:[{'fname':'Greg'},{'city':'New York'}]};
					
					db.collection('customer').find(where).each(callback);
					function callback(error,customer) {
										console.dir(customer);
										}

	},
	
selectSkipLimit: function(){
					console.log("selectSkipLimit-------->");
					
					db.collection('customer').find().sort('userid',1)
					.skip(1)
					.limit(5).toArray(callback);
					
					//variation
					//var options={"skip":1,"limit":5};
					//db.collection('customer').find({},options).toArray(callback);
					
					function callback(error,customers) {
											console.dir(customers);
															}
	},
// has to be modified
selectConditionsGTLTEQ: function(){
					console.log("selectConditionsGTLTEQ -------->Use GT or Greater than, LT Less than, GTE for Greater than equal to, LTE for less than equal to");
					var where={'score': {$gte:50}};
					db.collection('customer').find(where).each(callback);
					function callback(error,customer) {
											console.dir(customer);
															}
	}, 
	
selectisNullisNotNull: function(){
					console.log("selectisNullisNotNull----> is Null -$exists: false-----> is Not null-$exists:true");
					var where={'email': {$exists:false}, 'phone':{$exists:true}};
					db.collection('customer').find(where).each(callback);
					
					function callback(error,customer) {
											console.dir(customer);
															}
	},

selectLike: function() {
							
				// %lname% -/lname/ , lname% - /^lname/, %lname - /lname$/. 
				// Case Insensetivity - i ex: /lname/i			
					
					db.collection('customer')
				//   Variation
				//	.find({'lname': /^Es/})

					.find({'lname': {$regex: /^Es.*/}})
					.each(callback);

					function callback(error,customers)
						{
					console.log("inside data ");
					console.log(customers);
						}
	},

selectDistinct: function() {
										
					db.collection('customer')
					.distinct('userid',callback);
			

					function callback(error,customers)
						{
					console.log("inside data ");
					console.log(customers);
						}

	},

	selectWhereIN: function(){
					console.log("selectWhereIN----> where City in New York, San Francisco");
				
					var where={'city':{$nin:['New York','San Francisco']}};
					db.collection('customer').find(where).each(callback);
					function callback(error,customer) {
											console
											.dir(customer);
															}
	},

	selectWhereAll: function(){

					var where={'searchpattern':{$all:[/TV/,/LED/]}};
					db.collection('customer').find(where).each(callback);
					function callback(error,customer) {
											console
											.dir(customer);
															}
	},

	selectElemMatch: function(){
					var where={'clickedads':
								{$elemMatch: {'adseller':'Frys',
											  'purchasedquantity':{$gte:1} }
								}, 
							'fname':/Sr/};

					db.collection('customer').find(where).each(callback);
					function callback(error,customer) {
											console
											.dir(customer);
															}
	}

	

  };
}

