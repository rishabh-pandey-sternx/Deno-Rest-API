const env = Deno.env.toObject();

export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = parseInt(env.APP_PORT) || 4000;
export const DATABASE_URL = env.DATABASE_URL ||
  "mongodb+srv://manish:testing12@cluster0-ovpyj.mongodb.net/deno-mongo";
export const API_PREFIX = env.API_PREFIX || "api";
export const API_VERSION = env.API_VERSION || "V1";

export const REDIS_QUEUE_PORT = env.REDIS_QUEUE_PORT || 6379;
export const REDIS_QUEUE_URL = env.REDIS_QUEUE_URL || "127.0.0.1";
export const REDIS_QUEUE_DB = env.REDIS_QUEUE_DB || 3;
export const REDIS_QUEUE_PREFIX = env.REDIS_QUEUE_PREFIX || "q";
export const REDIS_QUEUE_EXPIRY = 1000 * 60 * 60 * 24;
