use college
db.createCollection("students")
db.students.drop() //delete a db

// Data Types
{
	string: "String of test",
	int: 408,
	double: 3.14159,
	boolean: true, // false
	array: [1, 2, 3],
	object: {attr1: "attr1", attr2: "attr2"},
	date: new Date("<YYYY-mm-dd>"),
	object_id: <ObjectId>,
	no_value: null

}

/*
	Additional Data Types
	Timestamp
	Binary data
	Regular expressions
	JavaScript code
*/

db.students.insertOne(
	{name: "Jhon", 
	 major: "Biology", 
	 gpa: 3.1
	})

db.students.insertOne(
	{name: "Jack", 
	 major: "Biology", 
	 gpa: 3.5
	})

db.students.insertOne(
	{name: "Amy", 
	 major: "IT", 
	 gpa: 3.0,
	awards: ["Valedictorian", "Summa cum laude"]
	})

db.students.insertOne(
	{_id: 4,
	 name: "Evan", 
	 major: "Astronomy", 
	 gpa: 3.7,
	 grades: [90, 88, 95, 78]
	})

db.students.insertOne(
	{name: "Kate", 
	 major: "Sociology", 
	 gpa: 3.2,
	 contact: {phone: "555-6666", email: "student@school.com"}
	})

db.students.insertOne(
	{name: "Phil", 
	 major: "Chemistry", 
	 gpa: 2.5,
	 startdate: new Date("2012-09-12")
	})

db.students.insertMany([
	{name: "Mike", 
	 major: "Computer Science", 
	 gpa: 2.9
	},
	{
	 name: "Anne",
	 major: "Math",
	 gpa: 4.0,
	 awards: ["Valedictorian", "Summa cum laude"]
	}
])
