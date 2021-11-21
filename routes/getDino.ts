import DinoCollection from '../db/dinocollection.ts';

export default async ({ response }: { response: any}) => {
   const dinos = await DinoCollection.getall();
   response.body = {
      success: true,
      data: dinos
   };

   response.status = 200;

   return;
}