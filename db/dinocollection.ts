//import client from './database.ts';
import { MongoClient } from "https://deno.land/x/mongo@v0.28.0/mod.ts";
import Dino from '../interfaces/dinoInterface.ts';

const client = new MongoClient();
await client.connect("mongodb://127.0.0.1:27017");


class DinoCollection {
    db = client.database('denodb');
    dinos = this.db.collection<Dino>('Dinos');

    async create(dino: any) {
        return await this.dinos.insertOne(dino)
    }

    async getall() {
        return await this.dinos.find({ name: { $ne: 'null' } }).toArray();
    }
}

export default new DinoCollection();