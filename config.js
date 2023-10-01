const config = require("./package.json").projectConfigUrl

module.exports = {
    mongoConfig: {
        connectionUrl: config.mongoConnectUrl,
        database: "FooDelivery_BackEnd_3",
        collections: {
            USERS: "users",
            RESTAURANTS: "restaurants",
            CARTS: "carts",
            FOODS: "foods",
            BOOKMARKS: "bookmarks"
        },
    },
    serverConfig: {
        ip: config.serverIp,
        port: config.serverPort
    },
    tokenSecret: "foodelivery_secret",
}