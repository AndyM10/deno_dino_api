import DinoCollection from "../db/dinocollection.ts";

export default async ({ request, response }: {request: any, response: any}) => {
    const body = await request.body();
    const dinos = await body.value;
    const dino = {
        name: dinos.name,
        era: dinos.era
    }

    if(!request.hasBody) {
        response.status = 400;
        response.body = {
            success: false,
            message: 'No Dino Data 🐱‍🐉 ...'
        }
        return;
    }

    try {
        DinoCollection.create(dino);
        response.status = 201;
        response.body = {
            success: true,
            data: dino
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString()
        };
     }
};