import "dotenv/config";
import app from "./server";

const PORT = process.env.PORT || 8080;

const handleListening = () =>
  console.info(`✅Server Listening on port ${PORT}🎉`);

app.listen(PORT, handleListening);
