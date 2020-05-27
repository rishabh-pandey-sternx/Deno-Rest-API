import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
import {
  REDIS_QUEUE_URL,
  REDIS_QUEUE_PORT,
  REDIS_QUEUE_PREFIX,
  REDIS_QUEUE_EXPIRY,
} from "../config.ts";

const redis = await connect({
  hostname: REDIS_QUEUE_URL,
  port: REDIS_QUEUE_PORT,
});

export const getJSON = async (id) => {
  const response = await redis.get(`${REDIS_QUEUE_PREFIX}:${id}`);
  if (!response) return response;
  return JSON.parse(response);
};

export const setJSON = async (key, data, ttl) => {
  const response = await redis.set(
    `${REDIS_QUEUE_PREFIX}:${key}`,
    JSON.stringify(data),
    ttl || REDIS_QUEUE_EXPIRY,
  );
  return response;
};
