import express from 'express'
import router from "./router.js";

const app = express();

app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT || 8000);

export default app