USE college
db.students.find({}, {_id: 0}) //don't want to return id field
db.students.find({}, {_id: 0}).limit(5)
db.students.find({}, {_id: 0}).sort({name:1}) //1: ASC order; -1: DESC order
db.students.find({}, {_id: 0}).sort({gpa: -1, name:1})
db.students.find({major: "Biology"}, {_id: 0}) //filter
db.students.find({$or: [{major:"Math"}, {name: "Amy"}]}, {_id: 0})
db.students.find({gpa: {$gt:3.2}},{_id: 0}) //$eq, $ne, $lt, $lte, $gt, $gte
db.students.find({gpa: {$lte:3.5}},{_id: 0}).sort({gpa: -1})
db.students.find({name: {$in:["Kate", "Claire"]}}, {_id: 0}) // $nin
db.students.find({awards: {$exists: true}}, {_id: 0}) // false
db.students.find({mayjor: {$type: 2}}, {_id: 0}) // BSON types
db.students.find({"grades.0": 90}, {_id: 0}) // first grade in array = 90
db.students.find({grades: {$elemMatch: {$gte: 80}}}, {_id: 0})
db.students.find({grades: {$size: 4}}, {_id: 0}) // return 4 elements in arraylist -- { "name" : "Evan", "major" : "Astronomy", "gpa" : 3.7, "grades" : [ 90, 88, 95, 78 ] }