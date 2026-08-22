import { app } from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, () => {
  console.info(`Interview Readiness Engine API listening on port ${env.PORT}`);
});
