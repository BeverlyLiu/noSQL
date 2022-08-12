db.students.updateOne(
		{major: "Biology"},
		{
		$set:
			{major: "Bio"}
		}
)

db.students.updateMany(
		{major: "Biology"},
		{
		$set:
			{major: "Bio"}
		}
)

db.students.replaceOne(
		{major: "Bio"},
		{name: "new name", major: "ndew major", gpa: 4.0}
) // diff: update just for 1 column; replace can do many column

db.students.deleteMany({gpa: {$gte: 3.7}})

db.students.deleteMany({major: "Bio"})