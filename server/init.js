import "dotenv/config";
import app from "./server";

export const GLOBAL_URL_HTTPS = "https://localhost:";
const PORT = process.env.PORT || 8080;

const handleListening = () =>
  console.log(`✅Server Listening on port ${PORT}🎉`);

app.listen(PORT, handleListening);
