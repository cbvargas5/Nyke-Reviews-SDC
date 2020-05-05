// const { db } = require('../database-mongodb/index');

db.createCollection("products", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "productName", "productId", "reviews", "price", "discountPrice", "productImage"
            ],
            properties: {
                productName: {
                    bsonType: "string",
                    description: ""
                },
                productId: {
                    bsonType: "string",
                    description: ""
                },
                reviews: {
                    bsonType: "string",
                    description: ""
                },
                price: {
                    bsonType: "string",
                    description: ""
                },
                discountPrice: {
                    bsonType: "string",
                    description: ""
                },
                productImage: {
                    bsonType: "string",
                    description: ""
                }
            }
        }
    }
})