db.stores.insertMany(
	[
		{_id: 1, name: "Java Hut", description:"Coffee and Cakes", "score": 2.25},
		{_id: 2, name: "Burger Buns", description:"Gourment hamburgers"},
		{_id: 3, name: "Coffee Shop", description:"Just coffee", "score": 1.5},
		{_id: 4, name: "Clothes Clothes Clothes", description:"Discount clothing"},
		{_id: 5, name: "Java Shopping", description:"Indonesian goods", "score": 0.75}
	]
)

db.stores.createIndex(	
	{name: "text", description: "text"}
)

db.stores.find(
		{$text: {$search: "Java Hut Coffee"}},
		{score: {$meta: "textScore"}}
).sort(
		{score: {$meta: "textScore"}}
)