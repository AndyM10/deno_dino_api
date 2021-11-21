import { MongoClient } from "https://deno.land/x/mongo@v0.28.0/mod.ts";

class Database {
    client = new MongoClient();
    constructor() {
        this.connect();
    }

    async connect() {
        await this.client.connect("mongodb://127.0.0.1:27017");
    }
}

export default new Database().client;