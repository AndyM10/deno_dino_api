export default async (nextFn:any) => {
    try{
        await nextFn();
    } catch (err) {
        return new Response(err.message, { status: 500 })
    }
}