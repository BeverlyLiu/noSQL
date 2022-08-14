db.purchase_orders.insertMany(
	[
		{product: "toothbrush", total: 4.5, customer: "Mike"},
		{product: "guitar", total: 199.99, customer: "Tom"},
		{product: "milk", total: 11.33, customer: "Mike"},
		{product: "pizza", total: 8.5, customer: "Karen"},
		{product: "toothbrush", total: 4.5, customer: "Karen"},
		{product: "pizza", total: 4.75, customer: "Dave"},
		{product: "toothbrush", total: 4.5, customer: "Dave"}
	]
)

//find out how many toothbrushes were sold
db.purchase_orders.count(
	{product: "toothbrush"
	}
)

//find list of all products sold
db.purchase_orders.distinct("product")

//find the total amount of money spent by each customer
db.purchase_orders.aggregate(
	[
		{$match: {customer: {$in: ["Mike", "Karen"]}}},
		{$group: {_id: "$customer", total: {$sum: "$total"}}},
		{$sort: {total: -1}} //1: ASC; -1: DESC
	]
)