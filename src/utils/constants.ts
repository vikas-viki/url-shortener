export const SHORT_URL_HOST= process.env.SHORT_URL_HOST;

export const REDIS_URLID_CACHE_TIME = 60 * 60; // 1 hr
export const REDIS_ALIAS_CACHE_TIME = 60 * 60; // 1 hr

export const DEFAULT_IP_COUNTRY = "UNKNOWN";

export const DEFAULT_SQS_MESSAGE_GROUP_ID= "url-shortening-group";

export const SQS_GET_BATCH_WAIT_TIME = 0 * 60 * 1000;
export const SQS_GET_BATCH_SIZE = 50;