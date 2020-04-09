const PORT = process.env.PORT || 4000;
const WORKERS = process.env.WORKERS || 1;
const JWT_LIFE_TIME = process.env.JWT_LIFE_TIME || "15m";
const CLOUDINARY_FOLDER = process.env.CLOUDINARY_FOLDER || "zillow";
const DATABASE_URL = process.env.DATABASE_URL;
import * as dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "";
const NODE_ENV = process.env.NODE_ENV || "production";

export default {
  PORT,
  WORKERS,
  NODE_ENV,
  JWT_SECRET,
  JWT_LIFE_TIME,
  CLOUDINARY_FOLDER,
  DATABASE_URL,
};
