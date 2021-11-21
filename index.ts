import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";
import _404 from "./contollers/404.ts";
import errorHandler from "./contollers/errorHander.ts";

const app = new Application()

app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);
app.use(errorHandler);

console.log("Server running on localhost:8080")
await app.listen({ port: 8080 })