export default (): Response => {
    return new Response("Not Found", { status: 404 });
};