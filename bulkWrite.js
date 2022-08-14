db.students.bulkWrite(
		[
		{insertOne: 
			{
				"document": {name: "Andy", major: "City Planning", gpa: 3.2}
			}
		},
		{insertOne: 
			{
				"document": {name: "Wendy", major: "Electrical Engineering", gpa: 3.8}
			}
		},
		{updateOne: 
			{
				filter: {name: "Wendy"},
				update: {$set: {gpa: 4.0}}
			}

		},
		{deleteOne: 
			{
				filter: {name: "Kate"}
			}
		},
		{replaceOne: 
			{
				filter: {name: "Mike"},
				replacement: {name: "Jimmy", major: "Counsling", gpa: 2.4}
			}
		}
		]
);