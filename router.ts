import { Router } from "https://deno.land/x/oak/mod.ts";
import getDinos from './routes/getDino.ts'
import addDinos from './routes/addDinos.ts';

const router = new Router();

router.get('/dinos', getDinos);
router.post('/dinos', addDinos)

export default router;