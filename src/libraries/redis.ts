import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
import { REDIS_QUEUE_URL, REDIS_QUEUE_PORT } from "../config.ts";

const redis = await connect({
  hostname: REDIS_QUEUE_URL,
  port: REDIS_QUEUE_PORT,
});

const ok = await redis.set("hoge", "fuga");
const fuga = await redis.get("hoge");
